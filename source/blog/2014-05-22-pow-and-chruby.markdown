---
title:  Pow and Chruby
date:   2014-05-22
---

Recently I wanted to use [Pow](http://pow.cx) with [Chruby](https://github.com/postmodern/chruby). I also needed to be able to use different Ruby versions on different projects. In this post I will explain my process. It will assume you followed my [previous post](/blog/2014-02-03-chruby.html) about setting up Chruby.

Pow is a (almost) zero configuration server for Ruby on Rails applications. It allows anyone to access Rails applications by using the `.dev` top level domain.

Every project linked to Pow needs to have a `.powenv` file that switches the ruby version.

```bash
# Load chruby
source /usr/local/share/chruby/chruby.sh
# Tell chruby to switch to the version specified
chruby $(cat .ruby-version)
```

A `.ruby-version` file is also required.

```bash
ruby-2.1.0
```

If set up right, Pow should switch to the Ruby version specified in the `.ruby-version file`.
