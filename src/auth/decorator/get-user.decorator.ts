import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const GetUser = createParamDecorator(
	(data: string | undefined, ctx: ExecutionContext) => {
		const request: Request = ctx.switchToHttp().getRequest();

		if (!data) request.user;
		return request.user[data];
	},
);
