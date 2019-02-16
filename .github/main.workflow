workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Google Cloud"]
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@1a017b23ef5762d20aeb3972079a7bce2c4a8bfe"
}
