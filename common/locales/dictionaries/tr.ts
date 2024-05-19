export default {
  COMPONENTS: {
    TABLE: {
      EMPTY_CONTENT: 'Gösterilecek veri yok.',
      LAST_UPDATED: 'Son Güncelleme',
      COLUMNS: {
        LABELS: {
          ACTIONS: 'Aksiyonlar',
          COVER: 'Kapak',
          TITLE: 'Başlık',
          DESCRIPTION: 'Açıklama',
          VIEWS: 'Görüntülenme',
        },
      },
    },
    POPCONFIRM: {
      DEFAULT_TITLE: 'İşlemi onayla',
      DEFAULT_DESCRIPTION:
        'Bu işlemi geri alamazsınız. Devam etmek istediğinize emin misiniz?',
      DELETE_WORK_TITLE: 'Çalışmayı sil',
      DELETE_WORK_DESCRIPTION:
        'Bu işlemi geri alamazsınız. Çalışmayı silmek istediğinize emin misiniz?',
    },
    WORKS: {
      TITLES: {
        ALL: 'Tümü',
        WORKS: 'Çalışmaları',
        COMPANY: 'Şirket',
        PERSONAL: 'Kişisel',
        FREELANCE: 'Freelance',
        SENIOR: 'Senior',
        LEAD: 'Lead',
        MID: 'Mid',
        JUNIOR: 'Junior',
      },
      SEE_ALL: 'Hepsini Gör',
    },
    MODAL: {
      TITLES: {
        ADD_NEW_WORK: 'Yeni Çalışma Ekle',
        EDIT_WORK: 'Çalışmayı Düzenle',
      },
    },
  },
  FORM_ELEMENTS: {
    CTA: {
      START: 'Başla',
      FINISH: 'Bitir',
      GO_BACK_HOME: 'Ana Sayfaya Dön',
      CONFIRM: 'Onayla',
      CANCEL: 'Vazgeç',
      SAVE: 'Kaydet',
      ADD_NEW: 'Yeni Ekle',
      ADD: 'Ekle',
      DELETE: 'Sil',
      REMOVE: 'Kaldır',
      UPDATE: 'Güncelle',
      EDIT: 'Düzenle',
      CREATE: 'Oluştur',
      CLOSE: 'Kapat',
      SUBMIT: 'Gönder',
      ADD_NEW_WORK: 'Yeni Çalışma Ekle',
      YES: 'Evet',
      NO: 'Hayır',
    },
    LABELS: {
      TITLE: 'Başlık',
      DESCRIPTION: 'Açıklama',
      LINK: 'Link',
      IMAGE: 'Resim',
      CATEGORY: 'Kategori',
      CONTENT: 'İçerik',
    },
    PLACEHOLDERS: {
      SELECT_IMAGE: 'Resim Seç',
      NO_FILE_SELECTED: 'Dosya seçilmedi',
    },
  },

  PAGE_CONTENTS: {
    HOME: {
      TITLE: 'Yazılım Geliştirici',
      DESCRIPTION:
        "Sürekli gelişime açık bir fullstack developer'ım. Sürükleyici deneyimler yaratma ve fikirleri hayata geçirme konusunda tutkuluyum. Hem frontend hem de backend deneyimim sayesinde projelerin her aşamasında yer alabiliyorum.",
      FULLNAME: 'Ali Karagöz',
    },
    WORKS: {
      TITLE: 'Çalışmalar',
      DESCRIPTION:
        'Çalışmalarımı keşfedin ve her projeye döktüğüm tutku ve yaratıcılığı deneyimleyin.',
    },
  },
  PAGE_TITLES: {
    HOME: 'Anasayfa',
    WORKS: 'Çalışmalar',
    ABOUT: 'Hakkımda',
    LINKS: 'Bağlantılar',
  },
  NOT_FOUND: {
    TITLE: 'Sayfa Bulunamadı',
    DESCRIPTION: 'Aradığınız sayfa bulunamadı.',
  },
} as const;
