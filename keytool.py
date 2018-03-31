#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-12-09 22:36:40
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import os,sys


def main():

    f = open('key.txt','r')
    ks = f.read()
    f.close()

    ks.replace('\t','').replace(' ','')

    tmp = ' '.join(ks.split())

    keys = tmp.split(' ')
    out = ''
    nkeys = []
    for k in keys:
        tmpk = k.strip()
        tmpk = tmpk.replace('\n','').replace(' ','').replace('\t','').replace('\r','').replace('　','').replace('——','_').replace('-','_')
        nkeys.append(tmpk)

    nkeys = list(set(nkeys))

    for k in nkeys:
        out += k + '\n'
    f = open('nkey.txt','w')
    f.write(out)
    f.close()
if __name__ == '__main__':
    main()
    
