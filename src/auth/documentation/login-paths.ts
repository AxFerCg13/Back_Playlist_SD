import { ApiOperationOptions, ApiResponseOptions } from "@nestjs/swagger";

export const loginSummary: ApiOperationOptions = {
    summary: "Login del usuario"
}

export const login200: ApiResponseOptions = {
    status: 200,
    description: "Acceso autorizado",
    schema: {
        example: {
            message: "Acceso autorizado",
            statusCode: 200,
            data: {
                validation: true
            }
        }
    }
}

export const login401: ApiResponseOptions = {
    status: 401,
    description: "Acceso denegado",
    schema: {
        example: {
            message: "Acceso denegado",
            error: "Unauthorized",
            statusCode: 401
        }
    }
}