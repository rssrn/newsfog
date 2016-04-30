echo "running pre-commit.sh"

#RESULT=$?
#if [ $RESULT -ne 0 ]; then
#	echo "FAIL"
#else
#	echo "PASS"
#fi
#exit 1

if git diff-index --quiet HEAD --; then
	# no changes between index and working copy; just run tests
	SUPPRESS_LOGS=y ./node_modules/.bin/mocha --reporter dot
	RESULT=$?
else
	# Test the version that's about to be committed,
	# stashing all unindexed changes
	git stash -q --keep-index
	SUPPRESS_LOGS=y ./node_modules/.bin/mocha --reporter dot
	RESULT=$?
	git stash pop -q
fi

[ $RESULT -ne 0 ] && exit 1
exit 0
