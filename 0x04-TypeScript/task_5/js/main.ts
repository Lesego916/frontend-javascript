// Nominal typing via branding
export interface MajorCredits {
  credits: number;
  /** brand to differentiate from MinorCredits */
  _majorBrand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  /** brand to differentiate from MajorCredits */
  _minorBrand: 'MinorCredits';
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'MajorCredits',
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'MinorCredits',
  };
}
