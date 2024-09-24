type RawTree =
    & { "$"?: 1 | undefined }
    & { [s in Exclude<string, "$">]?: RawTree | undefined };

declare function Trie(
    strings: string[],
): {
    /**
     * Get a string representation of the trie
     */
    dump(spacer?: number): string;
    /**
     * Get the generated raw trie object
     */
    tree(): RawTree;
    /**
     * Add a new word to the trie
     */
    addWord(word: string): ReturnType<typeof Trie>;
    /**
     * Remove an existing word from the trie
     */
    removeWord(word: string): ReturnType<typeof Trie>;
    /**
     * Check a prefix is valid
     * @returns Boolean
     */
    isPrefix(word: string): boolean;
    /**
     * Count the number of words with the given prefixSearch
     * @returns Number
     */
    countPrefix(word: string): number;
    /**
     * Get a list of all words in the trie with the given prefix
     * @returns Array
     */
    getPrefix(word: string, sort?: boolean): string[];
    /**
     * Get a random word in the trie with the given prefix
     * @returns Array
     */
    getRandomWordWithPrefix(prefix: string): string;
    /**
     * Get all words in the trie
     * @returns Array
     */
    getWords(sorted?: boolean): string[];
    /**
     * Check the existence of a word in the trie
     * @returns Boolean
     */
    hasWord(word: string): boolean;
    /**
     * Get a list of valid anagrams that can be made from the given letters
     * @returns Array
     */
    getAnagrams(word: string): string[];
    /**
     * Get a list of all sub-anagrams that can be made from the given letters
     * @returns Array
     */
    getSubAnagrams(word: string): string[];
};

export = Trie;
