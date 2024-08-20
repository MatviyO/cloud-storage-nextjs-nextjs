import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { validate as isUUID } from 'uuid';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string | null => {
    const request = ctx.switchToHttp().getRequest();
    console.log('Request in decorator:', request);
    const userId = request.user?.id;
    console.log('User ID in decorator:', userId);

    if (!userId || !isUUID(userId)) {
      throw new BadRequestException('Invalid user ID');
    }

    return userId;
  },
);
