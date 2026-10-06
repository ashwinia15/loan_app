import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(){
        super();
    }
    canActivate(context: ExecutionContext) {
        console.log('JwtAuthGuard canActivate called');
        return super.canActivate(context);
    }
}