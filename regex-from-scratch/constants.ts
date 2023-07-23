export enum Constants {
    MAX_REGEXP_OBJECTS = 50,
    MAX_CHAR_CLASS_LENGTH = 50,
}

export enum PatternType {
    BEGIN = 'begin',
    END = 'end',
    DOT = 'dot',
    STAR = 'star',
    PLUS = 'plus',
    QUESTIONMARK = 'questionmark',
    UNUSED = 'unused',
}

export enum CharClassType {
    BEGIN = '^'
}
