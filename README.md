# hardly everything
a feed for you

## schedule

### phase one
**june 5th, 2017**
- [x] introductory text
- [x] updated ui
- [x] updated hello
- [x] new server env
- [x] mobile styles

### phase one point five
- [ ] spend time w/ data
- [x] hovers from panel

### phase two
**june 20th, 2017**
- [ ] ui improvements
- [ ] search
- [ ] tags
- [ ] service workers / cache

### phase three
**july 1st, 2017**
- [ ] pouchdb
- [ ] couchdb
- [ ] sync
- [ ] support/upgrade

### phase four
- [ ] additional entry types

## queue
- [ ] hit up people about log contributions
- [ ] subtle transitions
- [ ] cache bust nginx
- [ ] self-hosted version
- [ ] arena integration

# features

## panel

### ui
- [ ] mouseenter/leave to hide and show views
- [ ] decouple from router
- [ ] router supports by passing props

### functionality
- different entry types
  - link
  - photo
  - video

## refactor
- design by isolating the pure functions for templates
- create a sandbox for viewing the templates
- use that as a way of determining structure

## data
- hardly everything app class constructor and `use` plugin for database
- dat
  - levelup/leveldown
  - sync using dat/hyperdrive/hypercloud
  - assign readable/memorable name to dat hash
  - learn a set of tools, not a framework
  - slightly immature
- pouch
  - switch to pouchdb
  - setup couchdb api
