// SAMPLE
this.manifest = {
  name: 'Shiny Shaarly',
  icon: '../assets/48x48.png',
  settings: [
    {
      tab: i18n.get('Shaarli configuration'),
      group: i18n.get('Server information'),
      name: 'base_url',
      type: 'text',
      label: i18n.get('Base URL'),
      text: i18n.get('x-url'),
    },
    {
      tab: i18n.get('Shaarli configuration'),
      group: i18n.get('Server information'),
      name: 'myDescription',
      type: 'description',
      text: i18n.get('description'),
    },
    {
      tab: i18n.get('Shaarli configuration'),
      group: i18n.get('Preferences'),
      name: 'skip_description',
      type: 'checkbox',
      label: i18n.get('Skip description and start on tags'),
    },
  ],
  alignment: [['base_url']],
};
