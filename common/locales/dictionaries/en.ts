export default {
  COMPONENTS: {
    TABLE: {
      EMPTY_CONTENT: 'No data to display.',
      LAST_UPDATED: 'Last Updated',
      COLUMNS: {
        LABELS: {
          ACTIONS: 'Actions',
          COVER: 'Cover',
          TITLE: 'Title',
          DESCRIPTION: 'Description',
          VIEWS: 'Views',
        },
      },
    },
    POPCONFIRM: {
      DEFAULT_TITLE: 'Confirm the action',
      DEFAULT_DESCRIPTION:
        'You cannot undo this action. Are you sure you want to continue?',
      DELETE_WORK_TITLE: 'Confirm the action',
      DELETE_WORK_DESCRIPTION:
        'You cannot undo this action. Are you sure you want to continue?',
    },
    WORKS: {
      TITLES: {
        ALL: 'All',
        WORKS: 'Works',
        COMPANY: 'Company',
        PERSONAL: 'Personal',
        FREELANCE: 'Freelance',
        SENIOR: 'Senior',
        LEAD: 'Lead',
        MID: 'Mid',
        JUNIOR: 'Junior',
      },
      SEE_ALL: 'See All',
    },

    MODAL: {
      TITLES: {
        ADD_NEW_WORK: 'Add New Work',
        EDIT_WORK: 'Edit Work',
      },
    },
  },
  FORM_ELEMENTS: {
    CTA: {
      START: 'Start',
      FINISH: 'Finish',
      GO_BACK_HOME: 'Go Back Home',
      CONFIRM: 'Confirm',
      CANCEL: 'Cancel',
      SAVE: 'Save',
      ADD_NEW: 'Add New',
      ADD: 'Add',
      DELETE: 'Delete',
      REMOVE: 'Remove',
      UPDATE: 'Update',
      EDIT: 'Edit',
      CREATE: 'Create',
      CLOSE: 'Close',
      SUBMIT: 'Submit',
      ADD_NEW_WORK: 'Add New Work',
      YES: 'Yes',
      NO: 'No',
    },
    LABELS: {
      TITLE: 'Title',
      DESCRIPTION: 'Description',
      LINK: 'Link',
      IMAGE: 'Image',
      CATEGORY: 'Category',
      CONTENT: 'Content',
    },
    PLACEHOLDERS: {
      SELECT_IMAGE: 'Select Image',
      NO_FILE_SELECTED: 'No file selected',
    },
  },

  PAGE_CONTENTS: {
    HOME: {
      TITLE: 'Software Developer',
      DESCRIPTION:
        "I am a fullstack developer open to continuous improvement. I'm passionate about creating immersive experiences and bringing ideas to life. Thanks to my both frontend and backend experience, I can take part in every stage of the projects.",
      FULLNAME: 'Ali Karagoz',
    },
    WORKS: {
      TITLE: 'Works',
      DESCRIPTION:
        "Explore my works and experience the passion and creativity I've poured into each project.",
    },
  },
  PAGE_TITLES: {
    HOME: 'Home',
    WORKS: 'Works',
    ABOUT: 'About',
    LINKS: 'Links',
  },
  NOT_FOUND: {
    TITLE: 'Page Not Found',
    DESCRIPTION: 'The page you are looking for could not be found.',
  },
} as const;
