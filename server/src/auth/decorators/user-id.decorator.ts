import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string | null => {
    console.log("userid")
    const request = ctx.switchToHttp().getRequest();
    return request.user.id || null;
  },
);
