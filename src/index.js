import getBoard from './get_board';
import genBoard from './gen_board';
import addNew from './add_new';
import './style.css';

const leaderboard = document.getElementById('leaderboard');
const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');

window.onload = async () => {
  const newScores = await getBoard();
  genBoard(leaderboard, newScores);
};

refreshBtn.addEventListener('click', () => document.location.reload());

submitBtn.addEventListener('click', async () => {
  const name = document.getElementById('user');
  const points = document.getElementById('score');
  const msg = document.getElementById('message');
  if (name.value.length < 1 || name.value.length > 6) {
    name.style.borderColor = 'red';
    points.style.borderColor = 'black';
    msg.innerHTML = '**name must contain between 1 and 6 characters**';
  } else if (points.value.length < 1 || points.value === '.') {
    name.style.borderColor = 'black';
    points.style.borderColor = 'red';
    msg.innerHTML = '**please enter your score**';
  } else {
    name.style.borderColor = 'black';
    points.style.borderColor = 'black';
    msg.innerHTML = '';
    await addNew(name.value, points.value);
    const newScores = await getBoard();
    genBoard(leaderboard, newScores);
    document.getElementById('form').reset();
  }
});