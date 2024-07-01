#!/usr/bin/env bash

year="2024"
month="06"
ym="$year$month"

postYear="2024"
postMonth="07"
postDay="01"

nflm_top="news-from-last-month-$postYear$postMonth-top.md"
nflm_dev="news-from-last-month-$postYear$postMonth-developer-edition.md"
nflm_var="news-from-last-month-$postYear$postMonth-wonderer-edition.md"
nflm_len="links_en.md"
nflm_lfr="links_fr.md"

rm $nflm_len
rm $nflm_lfr
rm $nflm_dev
rm $nflm_var
rm $nflm_top

writeHeader() {
  local output=$1
  local edition=$2

  {
    echo "---"
    echo "title: News from last month ($postYear/$postMonth), $edition edition"
    echo "description: A selection of links from last month."
    echo "date: $postYear-$postMonth-${postDay}T00:00:00.000Z"
    echo "updatedAt: $postYear-$postMonth-${postDay}T00:00:00.000Z"
    echo "image: """
    echo "imageDescription: """
    echo "tags:"
    echo "  - nflm"
    echo "---"
  } >> "$output"
}

writeLinks() {
	local input=$1
	local output=$2

  {
    echo ""
    cat "$input"
    echo ""
  } >> "$output"

  rm "$input"
}

save() {
	local filename=$1
	local text=$2
	if [ -e "$nflm_len" ] || [ -e "$nflm_lfr" ]; then
	  echo "$text" >> "$filename"
	fi

	if [ -e "$nflm_len" ]; then
	  writeLinks "$nflm_len" "$filename"
  fi

	if [ -e "$nflm_lfr" ]; then
	  echo "En français / In French:" >> "$filename"
    writeLinks "$nflm_lfr" "$filename"
  fi
}

buku -e $nflm_len -t $ym + top - fr --np
buku -e $nflm_lfr -t $ym + top + fr --np
save $nflm_top "## NFLM Intro"

writeHeader $nflm_dev "developer"

buku -e $nflm_len -t $ym + dev + web - fr --np
buku -e $nflm_lfr -t $ym + dev + web + fr --np
save $nflm_dev "## Web (HTML, CSS, JS, Design...)"

buku -e $nflm_len -t $ym + dev + backend - fr --np
buku -e $nflm_lfr -t $ym + dev + backend + fr --np
save $nflm_dev "## Backend & languages"

buku -e $nflm_len -t $ym + dev + devops - fr --np
buku -e $nflm_lfr -t $ym + dev + devops + fr --np
save $nflm_dev "## Cloud & DevOps"

buku -e $nflm_len -t $ym + opensource - fr --np
buku -e $nflm_lfr -t $ym + opensource + fr --np
save $nflm_dev "## Open source, Projects & Tools"

buku -e $nflm_len -t $ym + dev + various - fr --np
buku -e $nflm_lfr -t $ym + dev + various + fr --np
save $nflm_dev "## Other things, good practices, thoughts etc"

writeHeader $nflm_var "wonderer"

buku -e $nflm_len -t $ym + science - fr --np
buku -e $nflm_lfr -t $ym + science + fr --np
save $nflm_var "## Science"

buku -e $nflm_len -t $ym + social - fr --np
buku -e $nflm_lfr -t $ym + social + fr --np
save $nflm_var "## Social, Society, Psychology, Rights"

buku -e $nflm_len -t $ym + privacy - fr --np
buku -e $nflm_lfr -t $ym + privacy + fr --np
save $nflm_var "### Privacy"

buku -e $nflm_len -t $ym + work - fr --np
buku -e $nflm_lfr -t $ym + work + fr --np
save $nflm_var "### Work"

buku -e $nflm_len -t $ym + ai - fr --np
buku -e $nflm_lfr -t $ym + ai + fr --np
save $nflm_var "## AI"

buku -e $nflm_len -t $ym + various - dev, fr --np
buku -e $nflm_lfr -t $ym + various + fr - dev --np
save $nflm_var "## Various"
