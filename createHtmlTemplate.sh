#!/bin/bash

#uses this file to generate the html template. Once you edit a .jade file you must run this script.

jade views/login.jade
mv views/login.html public/components/login

jade views/register.jade
mv views/register.html public/components/register

jade views/navbar.jade
mv views/navbar.html public/components/navbar

jade views/admin.jade
mv views/admin.html public/components/admin