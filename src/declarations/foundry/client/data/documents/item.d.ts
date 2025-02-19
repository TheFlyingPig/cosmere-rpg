declare class Item<
    D extends foundry.abstract.DataSchema = foundry.abstract.DataSchema,
    P extends foundry.abstract.Document<
        foundry.abstract.DataModel,
        foundry.abstract.Document | null
    > = foundry.abstract.Document,
> extends _ClientDocumentMixin<D, P>(foundry.documents.BaseItem<D, P>) {
    public readonly type: string;
    public readonly name: string;
    public readonly img: string;
    public readonly system: D;

    get actor(): P | undefined;
    get effects(): Collection<ActiveEffect>;

    public getRollData(): D;

    /**
     * Determine default artwork based on the provided item data.
     * @param itemData  The source item data.
     * @returns         Candidate item image.
     */
    public static getDefaultArtwork(itemData: object): { img: string };
}
