import {rnaUtilities} from '../app/scripts/rnautils.js'

describe('RNA utilities unit tests', function() {
    let pt = rnaUtilities.dotbracketToPairtable('.((..)).');

    it('Should convert dot-bracket strings to pairtables', function() {
        
        expect(pt).toEqual([8,0,7,6,0,0,3,2,0])
    });

    it ('Should be able to create a list of ss elements', function() {
        let elements = rnaUtilities.ptToElements(pt, 0, 1, pt[0]);

        expect(elements.length).toEqual(3);
    });
});
