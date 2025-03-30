export default function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}
