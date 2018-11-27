import Component from '@ember/component';

export default class ContactList extends Component {
  constructor() {
    super(...arguments);

    this.listTitle = 'My Contacts';
    this.contacts = [
      {
        name: 'Zoey',
        email: 'zoey@emberjs.com',
      },
      {
        name: 'Tomster',
        email: 'tomster@emberjs.com',
      },
    ];
  }
}
