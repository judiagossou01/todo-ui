import { FormControl, ValidationErrors } from '@angular/forms';

export class Helpers {
  // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {
    // check if string only contains whitespace
    if (control.value != null && control.value.trim().length === 0) {
      // invalid, return error object
      return { notOnlyWhitespace: true };
    } else {
      // valid, return null
      return null;
    }
  }

  // capitalize first letter
  static capitalizeLetter(field: string): string {
    return field.charAt(0).toUpperCase() + field.slice(1);
  }
}
