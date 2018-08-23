function runIgvxhrTests() {


    asyncTest("Test abort", function () {

        var testURL = "https://igvdata.broadinstitute.org/genomes/seq/hg19/hg19.fasta"

        const caller = {};

        igv.xhr.load(testURL, {caller: caller})
            .then(function (data) {
                ok(false);
                start();
            })
            .catch(function (error) {
                ok(true);

                const foo = igv.xhr.loadsInProgress[caller];

                ok(igv.xhr.loadsInProgress.cache[caller] === undefined);

                start();
            })

        ok(igv.xhr.loadsInProgress.cache[caller]);

        igv.xhr.abort(caller);

    });


}



