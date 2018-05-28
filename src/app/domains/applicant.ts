export class Applicant {

  private _email: string;
  private _firstName: string;
  private _surname: string;
  private _address: string;
  private _dob: number;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get dob(): number {
    return this._dob;
  }

  set dob(value: number) {
    this._dob = value;
  }

  constructor(email: string, firstName: string, surname: string, address: string, dob: number) {
    this._email = email;
    this._firstName = firstName;
    this._surname = surname;
    this._address = address;
    this._dob = dob;
  }

  toString() {
    return `email: ${this._email}; firstName = ${this._firstName}; surname = ${this._surname}; address = ${this._address}; dob = ${this._dob}`;
  }

}
