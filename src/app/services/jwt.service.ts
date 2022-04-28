import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ITokens } from '@src/generated/types';
import { ITokenPayload } from '../types';

@Injectable({
    providedIn: 'root'
})
export class JwtService {
    jwtHelper = new JwtHelperService();

    decode(token: ITokens['accessToken']): ITokenPayload {
        return this.jwtHelper.decodeToken<ITokenPayload>(token);
    }
}
