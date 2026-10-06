import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../../constants/enums/roles.enum.js";
import { ROLES_KEY } from "../decorators/roles.decorators.js";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        console.log('RolesGuard canActivate called');
        // Here we have use get method as we only going to add roles guard on handler method.
        // we can change it later according to our needs if we want to add roles guard on controller level then we can use getAllAndOverride method.
        const requiredRoles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
        if(!requiredRoles) {
            return true; // no r @Roles on this route == anyone can logged in
        }
        // here we are extracting the user from the request object and checking if the user's role is included in the requiredRoles array.
        //  If it is, we return true, allowing access to the route. If not, we return false, denying access.
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.includes(user.role);
    }

}