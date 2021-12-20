import { UserRepository } from './state/user.repository';
import { delay, of, tap } from 'rxjs';

export class UserService {
  repo = new UserRepository();

  getUser() {
    return of(null).pipe(
      delay(2000),
      tap(() => {
        this.repo.updateUser({
          id: 1,
          name: 'Test'
        })
      })
    )
  }
}
