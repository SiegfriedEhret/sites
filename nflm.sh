#!/usr/bin/env bash

ym="2024-03"
nflm_dev="nflm_dev.md"
nflm_var="nflm_var.md"
nflm_len="links_en.md"
nflm_lfr="links_fr.md"

rm $nflm_len
rm $nflm_lfr
rm $nflm_dev
rm $nflm_var

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

buku -e $nflm_len -t $ym + dev + web - fr --np
buku -e $nflm_lfr -t $ym + dev + web + fr --np
save $nflm_dev "## Web (HTML, CSS, JS, Design...)"

buku -e $nflm_len -t $ym + dev + backend - fr --np
buku -e $nflm_lfr -t $ym + dev + backend + fr --np
save $nflm_dev "## Backend & languages"

buku -e $nflm_len -t $ym + opensource - fr --np
buku -e $nflm_lfr -t $ym + opensource + fr --np
save $nflm_dev "## Open source, Projects & Tools"

buku -e $nflm_len -t $ym + dev + various - fr --np
buku -e $nflm_lfr -t $ym + dev + various + fr --np
save $nflm_dev "## Other things, good practices, thoughts etc"

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
