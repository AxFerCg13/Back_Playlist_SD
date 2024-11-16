import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";

@Injectable()
export class BcryptService {
    encryptPassword(plainPassword: string): Promise<string> {
        const saltRounds = Math.floor(Math.random() * (15 - 10) + 10);
        return bcrypt.hash(plainPassword, saltRounds);
    }

    checkPassword(loginPassword: string, password: string) {
        const match = bcrypt.compareSync(loginPassword, password);
        return match;
    }
}
