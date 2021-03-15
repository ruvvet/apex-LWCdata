import { reduceErrors } from "c/ldsUtils";
import { LightningElement, wire } from "lwc";
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import getContacts from "@salesforce/apex/ContactController.getContacts";
const COLUMNS = [
  {
    label: "Contact First Name",
    fieldName: FIRSTNAME_FIELD.fieldApiFirstName,
    type: "text"
  },
  {
    label: "Contact Last Name",
    fieldName: LASTNAME_FIELD.fieldApiLastName,
    type: "currency"
  },
  { label: "Contact Email", fieldName: EMAIL_FIELD.fieldApiEmail, type: "text" }
];
export default class ContactList extends LightningElement {
  columns = COLUMNS;
  @wire(getContacts)
  contacts;
  get errors() {
    return this.contacts.error ? reduceErrors(this.contacts.error) : [];
  }
}
