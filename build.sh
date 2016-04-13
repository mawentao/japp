#!/bin/bash

####################################################
# @file:   build.sh
# @author: mawentao
# @create: 2016-04-11 19:38:36
# @modify: 2016-04-11 19:38:36
# @brief:  build.sh
####################################################

product='japp'
version='1.0'
outdir='release/1.0'
distfile="$product-v$version.zip"

function cpfiles()
{
    for i in $@; do
		cp -r $i $outdir
    done
}

if [ ! -d $outdir ];then
	mkdir -p $outdir
fi

rm -rf $outdir/$distfile

cp -r develop $outdir

cd $outdir; mv develop japp

zip -r $distfile japp

rm -rf japp

cd ../../

exit 0
