import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@app/auth/guards/jwt.guard';

export const AuthGuardWithBearer = () =>
  applyDecorators(UseGuards(JwtAuthGuard), ApiBearerAuth());
