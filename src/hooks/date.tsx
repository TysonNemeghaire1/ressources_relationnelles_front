export function formatDate(dateString: string) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options); // 'fr-FR' pour le format Français, ajustez selon la locale désirée
}
