export default {
  COMPONENTS: {
    TABLE: {
      EMPTY_CONTENT: 'Gösterilecek veri yok.',
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
      SURE: 'Emin misiniz?',
      DELETE: 'Silmek istediğinizden emin misiniz?',
    },
    WORKS: {
      TITLES: {
        MID_WORKS: 'Mid Çalışmalar',
        JUNIOR_WORKS: 'Junior Çalışmalar',
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
      CANCEL: 'İptal',
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
    },
    LABELS: {
      TITLE: 'Başlık',
      DESCRIPTION: 'Açıklama',
      LINK: 'Link',
      IMAGE: 'Resim',
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
