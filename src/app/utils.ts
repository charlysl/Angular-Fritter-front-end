import { Observable } from 'rxjs';

export class Utils {
  static mapError(err: Error): string {
    console.log('mapError', err);
    switch (err.message) {
      case 'InvalidCredentials':
        return 'Invalid user name and/or password';
      case 'DuplicateName':
        return 'Name already taken; try a different name';
      default:
        console.error(`Unexpected error: ${err}`);
        return '';
    }
  }

}
