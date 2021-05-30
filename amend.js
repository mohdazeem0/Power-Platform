const { execSync } = require('child_process');
const moment = require('moment');

const startDate = moment('2021-05-01');
const endDate = moment('2021-05-31');
const message = 'updated';

let currentDate = startDate.clone();

while (currentDate.isSameOrBefore(endDate)) {
    const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
    const command = `git commit --amend --date="${formattedDate}" -m "${message}"`;

    try {
        execSync(command);
        console.log(`Commit amended for ${formattedDate}`);
    } catch (error) {
        console.error(`Error amending commit for ${formattedDate}: ${error.message}`);
    }

    currentDate.add(1, 'day');
}
