# Gatheroo
A gathering node tracker for Final Fantasy XIV.

## Project aims
Things Gatheroo must do

- [ ] Be able to scrape a known public source of datamined FFXIV info, to generate a distilled JSON of all relevant trackable gathering items.
- [x] Synchronise up with Eorzea time, displaying a live timer, regardless of the user's local timezone
- [ ] Show a list of all possible timed Unspoiled, Ephemeral and Legendary gathering nodes, relevant to the current FFXIV patch level
- [ ] Allow users to select a set of nodes to keep track of
- [ ] Allow users to view a clear list of their tracked nodes

## Data source
This project sources its data from https://github.com/viion/ffxiv-datamining, and the CSV files found there.
