# Jacob Hobbie's Website

[![CircleCI branch](https://img.shields.io/circleci/project/github/HobbieJ/HobbieBlog/master.svg?longCache=true&style=for-the-badge)](https://circleci.com/gh/HobbieJ/HobbieBlog/tree/master)
[![GitHub license](https://img.shields.io/github/license/HobbieJ/HobbieBlog.svg?longCache=true&style=for-the-badge)](https://github.com/HobbieJ/HobbieBlog/blob/master/LICENSE.txt)

This is the source code for my website, hosted at my website, [JacobHobbie.com](https://jacobhobbie.com).

## Requirements/Installation

*Instructions are for the following environment: A Windows 10 machine with the Windows Linux Subsystem (Ubuntu) installed.*

Instead of describing how to install my Jekyll site, the instructions below describe how to install a clean instance of Jekyll with their default theme, *Minima*, which you can also find [here](https://github.com/jekyll/minima).

If you want to install the theme I made for my website, *Hobbies*, you can go [here](https://github.com/HobbieJ/Hobbies) to download it.

The official tutorial on how to create your own Jekyll site can be found in Jekyll's [documentation](https://jekyllrb.com/docs/home/).

### Requirements

You should know how to use both the Windows Command Prompt, (*cmd*), and *bash*. In addition, you should have installed the Windows Linux Subsystem. To learn how to enable the Windows Linux Subsystem and install Ubuntu on your Windows machine, follow the link [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to Microsoft's documentation, and follow the instructions.

To install Jekyll, you'll need the following:
* Ruby ([Instructions](https://www.ruby-lang.org/en/documentation/installation/#apt))
* RubyGems ([Instructions](https://rubygems.org/pages/download))
* GCC
* Make

### Installation

*These instructions are a summation of Jekyll's official [quickstart guide](https://jekyllrb.com/docs/quickstart/).*

1. Open Bash
2. **(Optional)** I reccomend working in your home directory so you can change things without using *sudo* multiple times. To do that, you can type the following:
```
cd ~
```
3. Install Jekyll & Bundle! You can do that with the following command:
```
gem install jekyll bundler
```
4. Create your new website/blog! You'll end up making a brand new folder with the name you choose for your blog. Replace "myblog" in the command with whatever you choose to name your blog, (without quotes):
```
jekyll new "myblog"
```
5. Your blog is created! You can either edit the files, or *cd* into your new blog. If you do decide to run your new blog first things first, go ahead and *cd* into your blog, and type the following command:
```
bundle exec jekyll serve
```
6. Now if you visit your localhost, (http://localhost:4000), you'll see your brand new website! Now unless you want your Jekyll blog to look very similar to others on the internet, I'd suggest theming it, either with [Hobbies](https://github.com/HobbieJ/Hobbies), one of the other public themes, or better yet, building your own theme! If you're interested in building your own theme, you can look at [Jekyll's guide](https://jekyllrb.com/docs/themes/), or one of the other tutorials online.

## Final Words

This site and its source code is published using the [MIT License](https://github.com/HobbieJ/HobbieBlog/blob/master/LICENSE) by Jacob Hobbie.

Thank you for visiting my source code for [JacobHobbie.com](https://jacobhobbie.com). I hope you enjoy it, and might be using it to help you think of how to build your own site!