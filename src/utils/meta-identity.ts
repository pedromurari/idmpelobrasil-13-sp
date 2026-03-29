/**
 * Utilitário para gerenciar a identidade do usuário para Meta CAPI (EMQ Optimization)
 */

const STORAGE_KEYS = {
  EXTERNAL_ID: 'npa_meta_external_id',
  USER_DATA: 'npa_meta_user_data',
};

export interface MetaUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

export const MetaIdentity = {
  /**
   * Obtém ou gera um External ID persistente para o usuário
   */
  getExternalId(): string {
    let externalId = localStorage.getItem(STORAGE_KEYS.EXTERNAL_ID);
    if (!externalId) {
      externalId = `npa_ext_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(STORAGE_KEYS.EXTERNAL_ID, externalId);
    }
    return externalId;
  },

  /**
   * Captura cookies específicos da Meta (_fbp, _fbc)
   */
  getCookie(name: string): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  },

  /**
   * Salva dados do usuário de forma persistente (para correspondência avançada em PageViews futuros)
   */
  saveUserData(data: MetaUserData) {
    const existing = this.getUserData();
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(updated));
  },

  /**
   * Recupera dados do usuário salvos anteriormente
   */
  getUserData(): MetaUserData {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    try {
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  /**
   * Retorna o pacote completo de identidade para envio à CAPI
   */
  getIdentity() {
    return {
      externalId: this.getExternalId(),
      fbp: this.getCookie('_fbp'),
      fbc: this.getCookie('_fbc'),
      savedData: this.getUserData(),
    };
  }
};
