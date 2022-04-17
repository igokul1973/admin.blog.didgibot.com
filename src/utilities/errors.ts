import HttpStatus from 'http-status-codes';

export interface IError extends Error {
    status: number;
    code?: string;
}

export class GenericError extends Error implements IError {
    override name = 'GENERIC';
    status = 0;
}

export class ArgumentError extends GenericError {
    override name = 'Argument error';
    code = 'argument_error';
    override status = HttpStatus.INTERNAL_SERVER_ERROR;
}

export class EnvError extends GenericError {
    override name = 'Environment variable error';
    code = 'missing_environment_variable';
    override status = HttpStatus.INTERNAL_SERVER_ERROR;
}

export class VkError extends GenericError {
    override name = 'Token Error';
    code = 'invalid_grant';
    override status = HttpStatus.INTERNAL_SERVER_ERROR;
}

export class UnauthorizedError extends GenericError {
    override name = 'UNAUTHORIZED';
    code = 'UNAUTHORIZED';
    override status = HttpStatus.UNAUTHORIZED;
}

export class ForbiddenError extends GenericError {
    override name = 'FORBIDDEN';
    code = 'FORBIDDEN';
    override status = HttpStatus.FORBIDDEN;
}

export class InternalUseOnlyError extends GenericError {
    override name = 'INTERNAL_USE_ONLY';
    code = 'internal_use_only';
    override status = HttpStatus.FORBIDDEN;
}
