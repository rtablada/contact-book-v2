import Component from '@ember/component';

export default class ContactList extends Component {
  constructor() {
    super(...arguments);

    this.set('listTitle', 'My Contacts');
    this.set('contacts', []);
    this.set('loading', true);

    fetch('http://ember-contact-book-api.herokuapp.com/people')
      .then(res => res.json())
      .then(contacts => {
        this.set('loading', false);
        this.set('contacts', contacts)
      });
  }
}
