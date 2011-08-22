#!/bin/bash
# $ bash build.sh containerdir googleanalyticsacc

TIME=`date +%s`
SRCDIR="$( cd "$( dirname "$0" )" && pwd )"
OUTDIR="$1/pocketjs"
GA=$2

rm -rf $OUTDIR
cp -R $SRCDIR $OUTDIR
cd $OUTDIR

rm build.sh
rm -rf .git

#sed -i '' -e 's/<html/& manifest="manifest.appcache"/' index.html # disabled for now due to complications
sed -i '' -e "s/##GA##/$GA/" index.js
echo "#$TIME" >> manifest.appcache

yuicompressor -o index.css index.css

python -c "
import re
print re.sub('/\*\*\* tree(?:\n|.)+listing \*\*\*/', 'var tree = ' + open('docs.json').read() + ';', open('index.js').read())
" | closure --language_in ECMASCRIPT5 --js_output_file index.js