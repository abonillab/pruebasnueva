timestamp=`date +%Y%m%d%H%M%S`
branch=`git branch | grep \* | cut -d ' ' -f2`
war_file=`ls target/*.war | head -n 1`

curl -X PUT "https://bancodebogota.jfrog.io/bancodebogota/qa/account_oppening/${timestamp}_${branch}.war" -T $war_file