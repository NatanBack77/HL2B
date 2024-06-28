function formatString(input: string): string {
	// Remove espaços e símbolos
	const cleanedString = input.replace(/[\s\W_]+/g, "");

	// Converte para minúsculas
	const lowercaseString = cleanedString.toLowerCase();

	return lowercaseString;
}
