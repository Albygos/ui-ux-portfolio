/* Google Search Console Clone - Application JavaScript */

// --- DYNAMIC DATA STORE ---
const mockDatabase = {
  "https://pdf-converter.shop/": {
    "7": {
      clicks: "3.2K", clicksTrend: "12.4%", clicksTrendUp: true,
      impressions: "62K", impressionsTrend: "8.1%", impressionsTrendUp: true,
      ctr: "5.2%", ctrTrend: "3.9%", ctrTrendUp: true,
      position: "12.5", positionTrend: "0.4", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "3,200", pct: "62.7%", barPct: 62.7 },
        { name: "Direct", clicks: "1,180", pct: "23.1%", barPct: 23.1 },
        { name: "Referral", clicks: "480", pct: "9.4%", barPct: 9.4 },
        { name: "Social", clicks: "180", pct: "3.5%", barPct: 3.5 },
        { name: "Other", clicks: "65", pct: "1.3%", barPct: 1.3 },
      ],
      totalClicks: "5.1K"
    },
    "28": {
      clicks: "12.4K", clicksTrend: "18.6%", clicksTrendUp: true,
      impressions: "245K", impressionsTrend: "12.9%", impressionsTrendUp: true,
      ctr: "5.1%", ctrTrend: "4.3%", ctrTrendUp: true,
      position: "12.7", positionTrend: "1.6", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "12.4K", pct: "61.7%", barPct: 61.7 },
        { name: "Direct", clicks: "5.1K", pct: "25.4%", barPct: 25.4 },
        { name: "Referral", clicks: "1.9K", pct: "9.5%", barPct: 9.5 },
        { name: "Social", clicks: "0.7K", pct: "3.4%", barPct: 3.4 },
        { name: "Other", clicks: "0.2K", pct: "0.8%", barPct: 0.8 },
      ],
      totalClicks: "20.3K"
    },
    "90": {
      clicks: "38.2K", clicksTrend: "22.1%", clicksTrendUp: true,
      impressions: "740K", impressionsTrend: "15.4%", impressionsTrendUp: true,
      ctr: "5.2%", ctrTrend: "5.1%", ctrTrendUp: true,
      position: "12.2", positionTrend: "2.1", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "38.2K", pct: "60.2%", barPct: 60.2 },
        { name: "Direct", clicks: "16.1K", pct: "25.4%", barPct: 25.4 },
        { name: "Referral", clicks: "6.2K", pct: "9.8%", barPct: 9.8 },
        { name: "Social", clicks: "2.1K", pct: "3.3%", barPct: 3.3 },
        { name: "Other", clicks: "0.8K", pct: "1.3%", barPct: 1.3 },
      ],
      totalClicks: "63.4K"
    },
    "365": {
      clicks: "154K", clicksTrend: "34.5%", clicksTrendUp: true,
      impressions: "2.9M", impressionsTrend: "28.3%", impressionsTrendUp: true,
      ctr: "5.3%", ctrTrend: "6.2%", ctrTrendUp: true,
      position: "11.8", positionTrend: "3.5", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "154K", pct: "61.1%", barPct: 61.1 },
        { name: "Direct", clicks: "64K", pct: "25.4%", barPct: 25.4 },
        { name: "Referral", clicks: "24K", pct: "9.5%", barPct: 9.5 },
        { name: "Social", clicks: "8K", pct: "3.2%", barPct: 3.2 },
        { name: "Other", clicks: "2K", pct: "0.8%", barPct: 0.8 },
      ],
      totalClicks: "252K"
    }
  },
  "https://easy-doc-editor.com/": {
    "7": {
      clicks: "1.8K", clicksTrend: "4.1%", clicksTrendUp: true,
      impressions: "45K", impressionsTrend: "2.2%", impressionsTrendUp: false,
      ctr: "4.0%", ctrTrend: "1.2%", ctrTrendUp: true,
      position: "16.4", positionTrend: "0.1", positionTrendUp: false,
      channels: [
        { name: "Organic Search", clicks: "1,800", pct: "55.4%", barPct: 55.4 },
        { name: "Direct", clicks: "920", pct: "28.3%", barPct: 28.3 },
        { name: "Referral", clicks: "350", pct: "10.8%", barPct: 10.8 },
        { name: "Social", clicks: "120", pct: "3.7%", barPct: 3.7 },
        { name: "Other", clicks: "60", pct: "1.8%", barPct: 1.8 },
      ],
      totalClicks: "3.25K"
    },
    "28": {
      clicks: "7.1K", clicksTrend: "8.3%", clicksTrendUp: true,
      impressions: "172K", impressionsTrend: "5.4%", impressionsTrendUp: true,
      ctr: "4.1%", ctrTrend: "2.1%", ctrTrendUp: true,
      position: "15.9", positionTrend: "0.5", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "7.1K", pct: "56.8%", barPct: 56.8 },
        { name: "Direct", clicks: "3.5K", pct: "28.0%", barPct: 28.0 },
        { name: "Referral", clicks: "1.2K", pct: "9.6%", barPct: 9.6 },
        { name: "Social", clicks: "0.5K", pct: "4.0%", barPct: 4.0 },
        { name: "Other", clicks: "0.2K", pct: "1.6%", barPct: 1.6 },
      ],
      totalClicks: "12.5K"
    },
    "90": {
      clicks: "22.5K", clicksTrend: "14.2%", clicksTrendUp: true,
      impressions: "520K", impressionsTrend: "11.1%", impressionsTrendUp: true,
      ctr: "4.3%", ctrTrend: "3.2%", ctrTrendUp: true,
      position: "15.2", positionTrend: "1.2", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "22.5K", pct: "57.1%", barPct: 57.1 },
        { name: "Direct", clicks: "11.0K", pct: "27.9%", barPct: 27.9 },
        { name: "Referral", clicks: "3.8K", pct: "9.6%", barPct: 9.6 },
        { name: "Social", clicks: "1.5K", pct: "3.8%", barPct: 3.8 },
        { name: "Other", clicks: "0.6K", pct: "1.6%", barPct: 1.6 },
      ],
      totalClicks: "39.4K"
    },
    "365": {
      clicks: "94.2K", clicksTrend: "25.1%", clicksTrendUp: true,
      impressions: "2.1M", impressionsTrend: "18.3%", impressionsTrendUp: true,
      ctr: "4.5%", ctrTrend: "4.8%", ctrTrendUp: true,
      position: "14.4", positionTrend: "2.0", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "94.2K", pct: "57.8%", barPct: 57.8 },
        { name: "Direct", clicks: "45.0K", pct: "27.6%", barPct: 27.6 },
        { name: "Referral", clicks: "15.8K", pct: "9.7%", barPct: 9.7 },
        { name: "Social", clicks: "5.8K", pct: "3.6%", barPct: 3.6 },
        { name: "Other", clicks: "2.1K", pct: "1.3%", barPct: 1.3 },
      ],
      totalClicks: "162.9K"
    }
  },
  "https://compress-images-free.org/": {
    "7": {
      clicks: "850", clicksTrend: "2.1%", clicksTrendUp: false,
      impressions: "28K", impressionsTrend: "5.6%", impressionsTrendUp: true,
      ctr: "3.0%", ctrTrend: "4.5%", ctrTrendUp: false,
      position: "22.4", positionTrend: "1.2", positionTrendUp: false,
      channels: [
        { name: "Organic Search", clicks: "850", pct: "51.5%", barPct: 51.5 },
        { name: "Direct", clicks: "510", pct: "30.9%", barPct: 30.9 },
        { name: "Referral", clicks: "180", pct: "10.9%", barPct: 10.9 },
        { name: "Social", clicks: "80", pct: "4.8%", barPct: 4.8 },
        { name: "Other", clicks: "30", pct: "1.9%", barPct: 1.9 },
      ],
      totalClicks: "1.65K"
    },
    "28": {
      clicks: "3.4K", clicksTrend: "1.8%", clicksTrendUp: true,
      impressions: "115K", impressionsTrend: "8.6%", impressionsTrendUp: true,
      ctr: "3.0%", ctrTrend: "5.2%", ctrTrendUp: false,
      position: "21.6", positionTrend: "0.8", positionTrendUp: false,
      channels: [
        { name: "Organic Search", clicks: "3.4K", pct: "50.7%", barPct: 50.7 },
        { name: "Direct", clicks: "2.1K", pct: "31.3%", barPct: 31.3 },
        { name: "Referral", clicks: "0.7K", pct: "10.4%", barPct: 10.4 },
        { name: "Social", clicks: "0.3K", pct: "4.5%", barPct: 4.5 },
        { name: "Other", clicks: "0.2K", pct: "3.1%", barPct: 3.1 },
      ],
      totalClicks: "6.7K"
    },
    "90": {
      clicks: "11.2K", clicksTrend: "5.4%", clicksTrendUp: false,
      impressions: "380K", impressionsTrend: "12.1%", impressionsTrendUp: true,
      ctr: "2.9%", ctrTrend: "6.1%", ctrTrendUp: false,
      position: "22.1", positionTrend: "0.4", positionTrendUp: false,
      channels: [
        { name: "Organic Search", clicks: "11.2K", pct: "50.9%", barPct: 50.9 },
        { name: "Direct", clicks: "6.8K", pct: "30.9%", barPct: 30.9 },
        { name: "Referral", clicks: "2.4K", pct: "10.9%", barPct: 10.9 },
        { name: "Social", clicks: "1.1K", pct: "5.0%", barPct: 5.0 },
        { name: "Other", clicks: "0.5K", pct: "2.3%", barPct: 2.3 },
      ],
      totalClicks: "22.0K"
    },
    "365": {
      clicks: "48.2K", clicksTrend: "12.1%", clicksTrendUp: true,
      impressions: "1.5M", impressionsTrend: "22.5%", impressionsTrendUp: true,
      ctr: "3.2%", ctrTrend: "2.2%", ctrTrendUp: true,
      position: "20.8", positionTrend: "1.6", positionTrendUp: true,
      channels: [
        { name: "Organic Search", clicks: "48.2K", pct: "51.2%", barPct: 51.2 },
        { name: "Direct", clicks: "29.0K", pct: "30.8%", barPct: 30.8 },
        { name: "Referral", clicks: "10.2K", pct: "10.8%", barPct: 10.8 },
        { name: "Social", clicks: "4.8K", pct: "5.1%", barPct: 5.1 },
        { name: "Other", clicks: "1.9K", pct: "2.1%", barPct: 2.1 },
      ],
      totalClicks: "94.1K"
    }
  }
};

// --- APP GLOBAL STATE ---
const state = {
  activeProperty: "https://pdf-converter.shop/",
  activeDays: "28",
  activeMetrics: {
    clicks: true,
    impressions: true,
    ctr: false,
    position: false
  },
  theme: 'light'
};

let mainChartInstance = null;

// --- CHART GENERATION DATA HELPERS ---
function getDatesArray(daysCount) {
  const dates = [];
  const count = parseInt(daysCount);
  const now = new Date();
  
  // Choose how many intervals to draw based on days
  let steps = 15;
  if (count === 7) steps = 7;
  else if (count === 90) steps = 13;
  else if (count === 365) steps = 12;

  for (let i = steps - 1; i >= 0; i--) {
    const d = new Date();
    const daysOffset = Math.round((i * count) / steps);
    d.setDate(now.getDate() - daysOffset);
    
    // Formatting: "May 8", "Jun 1"
    const formatted = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    dates.push(formatted);
  }
  return dates;
}

// Draw line points matching the property and timeframe
function getMetricChartData(property, days, metric) {
  const seed = hashString(property + days + metric);
  const count = parseInt(days);
  let steps = 15;
  if (count === 7) steps = 7;
  else if (count === 90) steps = 13;
  else if (count === 365) steps = 12;

  // Define scale guidelines
  let min = 0, max = 1000;
  if (metric === 'clicks') {
    const rawVal = parseFloat(mockDatabase[property][days].clicks);
    const multiplier = mockDatabase[property][days].clicks.includes('K') ? 1000 : 1;
    const finalVal = rawVal * multiplier;
    min = finalVal * 0.4;
    max = finalVal * 1.3;
  } else if (metric === 'impressions') {
    const rawVal = parseFloat(mockDatabase[property][days].impressions);
    const multiplier = mockDatabase[property][days].impressions.includes('M') ? 1000000 : (mockDatabase[property][days].impressions.includes('K') ? 1000 : 1);
    const finalVal = rawVal * multiplier;
    min = finalVal * 0.3;
    max = finalVal * 1.25;
  } else if (metric === 'ctr') {
    const rawVal = parseFloat(mockDatabase[property][days].ctr);
    min = Math.max(0.1, rawVal * 0.7);
    max = rawVal * 1.3;
  } else if (metric === 'position') {
    const rawVal = parseFloat(mockDatabase[property][days].position);
    min = Math.max(1, rawVal - 3);
    max = rawVal + 3;
  }

  const values = [];
  let currentVal = (min + max) / 2;
  
  for (let i = 0; i < steps; i++) {
    // Generate organic-looking curve with random walk seeded
    const randomFactor = pseudoRandom(seed + i);
    const wave = Math.sin(i / 1.5) * ((max - min) * 0.15);
    const drift = (randomFactor - 0.5) * ((max - min) * 0.2);
    
    let nextVal = currentVal + drift + wave;
    if (nextVal > max) nextVal = max - (max - min) * 0.1;
    if (nextVal < min) nextVal = min + (max - min) * 0.1;

    currentVal = nextVal;
    values.push(Math.round(currentVal * 10) / 10);
  }
  
  return values;
}

// Pseudo-random number generator using seed hash
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
function pseudoRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// --- RENDERING CONTROLLER FUNCTIONS ---

// Update UI Text values & Progress tables
function updateUIElements() {
  const data = mockDatabase[state.activeProperty][state.activeDays];
  
  // Update Header Inspection input placeholder
  document.getElementById('inspectionSearchInput').placeholder = `Inspect any URL in "${state.activeProperty}"`;

  // Update KPI card numbers
  document.getElementById('clicksVal').textContent = data.clicks;
  document.getElementById('impressionsVal').textContent = data.impressions;
  document.getElementById('ctrVal').textContent = data.ctr;
  document.getElementById('positionVal').textContent = data.position;

  // Update KPI card trends
  updateTrendBadge('clicksTrend', data.clicksTrend, data.clicksTrendUp);
  updateTrendBadge('impressionsTrend', data.impressionsTrend, data.impressionsTrendUp);
  updateTrendBadge('ctrTrend', data.ctrTrend, data.ctrTrendUp);
  updateTrendBadge('positionTrend', data.positionTrend, data.positionTrendUp);

  // Update Traffic table
  const tbody = document.getElementById('channelsTableBody');
  tbody.innerHTML = '';

  data.channels.forEach(ch => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="channel-name-cell">
          <span>${ch.name}</span>
          <div class="channel-progress-bar-container">
            <div class="channel-progress-bar" style="width: 0%; background-color: var(--md-sys-color-primary);"></div>
          </div>
        </div>
      </td>
      <td class="channel-clicks-cell">${ch.clicks}</td>
      <td class="channel-pct-cell">${ch.pct}</td>
    `;
    tbody.appendChild(row);
    
    // Micro transition trigger for progress bar
    setTimeout(() => {
      const bar = row.querySelector('.channel-progress-bar');
      if (bar) bar.style.width = ch.barPct + '%';
    }, 50);
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'channel-row-total';
  totalRow.innerHTML = `
    <td>Total</td>
    <td class="channel-clicks-cell">${data.totalClicks}</td>
    <td class="channel-pct-cell">100%</td>
  `;
  tbody.appendChild(totalRow);

  // Update Recent Issues Card text dynamically
  const issuesText = document.getElementById('issuesStatusText');
  const issuesCheck = document.querySelector('.issue-check-circle');
  if (state.activeProperty.includes('compress-images')) {
    issuesText.textContent = "1 minor mobile usability issue detected. Make sure text is readable and clickable items are not too close.";
    issuesCheck.textContent = "warning";
    issuesCheck.style.color = "var(--md-sys-color-error)";
  } else {
    issuesText.textContent = `No critical issues in the last ${state.activeDays} days. All issues are being monitored and none need your attention right now.`;
    issuesCheck.textContent = "check_circle";
    issuesCheck.style.color = ""; // default color
  }

  // Update navigation styles to show active elements
  updateSidebarNavHighlights();
}

function updateTrendBadge(id, percentage, isUp) {
  const badge = document.getElementById(id);
  const icon = badge.querySelector('.trend-badge-icon');
  const pct = badge.querySelector('.trend-pct');
  
  pct.textContent = percentage;
  
  if (isUp) {
    badge.className = "trend-badge up";
    icon.textContent = "arrow_upward";
  } else {
    badge.className = "trend-badge down";
    icon.textContent = "arrow_downward";
  }
}

// Updates active class states on side menu
function updateSidebarNavHighlights() {
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  // Mark Overview active by default
  const overviewItem = document.querySelector('[data-nav="overview"]');
  if (overviewItem && !document.querySelector('.sidebar-nav .nav-item.active')) {
    overviewItem.classList.add('active');
  }
}

// Generate the Chart.js dataset matching theme settings
function renderMainChart() {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  const dates = getDatesArray(state.activeDays);
  
  // Theme styling overrides
  const isDark = state.theme === 'dark';
  const gridColor = isDark ? '#2d2e30' : '#e0e0e0';
  const textColor = isDark ? '#9aa0a6' : '#5f6368';

  const datasets = [];
  
  if (state.activeMetrics.clicks) {
    datasets.push({
      label: 'Clicks',
      data: getMetricChartData(state.activeProperty, state.activeDays, 'clicks'),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-clicks').trim(),
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-clicks').trim(),
      tension: 0.35,
      yAxisID: 'yClicks'
    });
  }

  if (state.activeMetrics.impressions) {
    datasets.push({
      label: 'Impressions',
      data: getMetricChartData(state.activeProperty, state.activeDays, 'impressions'),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-impressions').trim(),
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-impressions').trim(),
      tension: 0.35,
      yAxisID: 'yImpressions'
    });
  }

  if (state.activeMetrics.ctr) {
    datasets.push({
      label: 'Average CTR',
      data: getMetricChartData(state.activeProperty, state.activeDays, 'ctr'),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-ctr').trim(),
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-ctr').trim(),
      tension: 0.35,
      yAxisID: 'yCtr'
    });
  }

  if (state.activeMetrics.position) {
    datasets.push({
      label: 'Average Position',
      data: getMetricChartData(state.activeProperty, state.activeDays, 'position'),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-position').trim(),
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-position').trim(),
      tension: 0.35,
      yAxisID: 'yPosition'
    });
  }

  // Clear previous chart instance
  if (mainChartInstance) {
    mainChartInstance.destroy();
  }

  // Draw Legend markup manually above the chart canvas
  updateChartLegendMarkup();

  // Initialize new chart
  mainChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false // Using custom legends above chart instead
        },
        tooltip: {
          enabled: true,
          backgroundColor: isDark ? '#303134' : '#ffffff',
          titleColor: isDark ? '#e8eaed' : '#202124',
          bodyColor: isDark ? '#bdc1c6' : '#3c4043',
          borderColor: isDark ? '#3c4043' : '#dadce0',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          titleFont: { family: 'Outfit', size: 13, weight: '600' },
          bodyFont: { family: 'Inter', size: 12 },
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed.y !== null) {
                if (context.dataset.yAxisID === 'yImpressions') {
                  label += formatNumberWithK(context.parsed.y);
                } else if (context.dataset.yAxisID === 'yClicks') {
                  label += formatNumberWithK(context.parsed.y);
                } else if (context.dataset.yAxisID === 'yCtr') {
                  label += context.parsed.y + '%';
                } else {
                  label += context.parsed.y;
                }
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 }
          }
        },
        yClicks: {
          type: 'linear',
          display: state.activeMetrics.clicks,
          position: 'left',
          grid: {
            color: gridColor,
            drawBorder: false
          },
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 },
            callback: function(value) { return formatNumberWithK(value); }
          }
        },
        yImpressions: {
          type: 'linear',
          display: state.activeMetrics.impressions,
          position: 'right',
          grid: {
            drawOnChartArea: !state.activeMetrics.clicks, // draw grid lines only if clicks is hidden
            color: gridColor,
            drawBorder: false
          },
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 },
            callback: function(value) { return formatNumberWithK(value); }
          }
        },
        yCtr: {
          type: 'linear',
          display: state.activeMetrics.ctr,
          position: 'right',
          grid: {
            drawOnChartArea: !state.activeMetrics.clicks && !state.activeMetrics.impressions,
            color: gridColor,
            drawBorder: false
          },
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 },
            callback: function(value) { return value + '%'; }
          }
        },
        yPosition: {
          type: 'linear',
          display: state.activeMetrics.position,
          position: 'left',
          reverse: true, // Reversed y-axis scale for search positions (rank 1 at top)
          grid: {
            drawOnChartArea: !state.activeMetrics.clicks && !state.activeMetrics.ctr,
            color: gridColor,
            drawBorder: false
          },
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 }
          }
        }
      }
    }
  });
}

// Build the HTML legend bar below the chart header
function updateChartLegendMarkup() {
  const container = document.getElementById('chartLegendContainer');
  container.innerHTML = '';

  const activeNames = [];
  if (state.activeMetrics.clicks) activeNames.push({ name: 'Clicks', class: 'clicks' });
  if (state.activeMetrics.impressions) activeNames.push({ name: 'Impressions', class: 'impressions' });
  if (state.activeMetrics.ctr) activeNames.push({ name: 'Average CTR', class: 'ctr' });
  if (state.activeMetrics.position) activeNames.push({ name: 'Average Position', class: 'position' });

  activeNames.forEach(item => {
    const el = document.createElement('div');
    el.className = 'legend-item';
    el.innerHTML = `
      <div class="legend-color-line ${item.class}"></div>
      <span>${item.name}</span>
    `;
    container.appendChild(el);
  });
}

function formatNumberWithK(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
}

// --- PROPERTY SELECTOR INTERACTION ---

const propertyList = [
  "https://pdf-converter.shop/",
  "https://easy-doc-editor.com/",
  "https://compress-images-free.org/"
];

function populatePropertyDropdown() {
  const listEl = document.getElementById('propertyItemsList');
  listEl.innerHTML = '';
  
  propertyList.forEach(url => {
    const isSelected = url === state.activeProperty;
    const item = document.createElement('div');
    item.className = `property-item ${isSelected ? 'selected' : ''}`;
    item.setAttribute('data-url', url);
    item.innerHTML = `
      <div class="property-item-text">
        <span class="material-symbols-outlined property-icon">language</span>
        <span>${url}</span>
      </div>
      ${isSelected ? '<span class="material-symbols-outlined" style="font-size:16px;">check</span>' : ''}
    `;
    listEl.appendChild(item);

    item.addEventListener('click', () => {
      selectProperty(url);
    });
  });
}

function selectProperty(url) {
  state.activeProperty = url;
  document.getElementById('activePropertyUrl').textContent = url;
  
  // Close dropdown
  document.getElementById('propertyDropdown').classList.remove('show');
  document.getElementById('propertySelectorBtn').classList.remove('active');
  
  // Re-render UI & Chart
  populatePropertyDropdown();
  updateUIElements();
  renderMainChart();
  
  showToast(`Switched properties to ${url}`, 'success');
}

// Property Filter Input Box
document.getElementById('propertySearch').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.property-item').forEach(item => {
    const url = item.getAttribute('data-url').toLowerCase();
    if (url.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});

// Property Selector Trigger Button
document.getElementById('propertySelectorBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const dropdown = document.getElementById('propertyDropdown');
  const isActive = dropdown.classList.toggle('show');
  document.getElementById('propertySelectorBtn').classList.toggle('active', isActive);
});

// --- DATE FILTER RANGE SELECTOR ---

document.getElementById('dateFilterBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('dateDropdown').classList.toggle('show');
});

document.querySelectorAll('.date-option').forEach(option => {
  option.addEventListener('click', (e) => {
    const days = option.getAttribute('data-days');
    state.activeDays = days;

    // Reset indicator classes
    document.querySelectorAll('.date-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');

    // Update button text labels
    let label = 'Last 28 days';
    if (days === '7') label = 'Last 7 days';
    if (days === '90') label = 'Last 3 months';
    if (days === '365') label = 'Last 12 months';
    document.getElementById('dateFilterLabel').textContent = label;

    document.getElementById('dateDropdown').classList.remove('show');

    // Re-render
    updateUIElements();
    renderMainChart();
    showToast(`Updated performance view for ${label}`, 'success');
  });
});

// --- CARD TOGGLING METRICS CONTROLS ---

document.querySelectorAll('.kpi-card').forEach(card => {
  card.addEventListener('click', () => {
    const metric = card.getAttribute('data-metric');
    
    // Toggle active state
    const isActive = !state.activeMetrics[metric];
    
    // Enforce at least one metric remains active in the viewport
    const activeCount = Object.values(state.activeMetrics).filter(Boolean).length;
    if (!isActive && activeCount <= 1) {
      showToast("At least one metric must be selected.", "warning");
      return;
    }

    state.activeMetrics[metric] = isActive;
    card.classList.toggle('active', isActive);

    // Redraw graph
    renderMainChart();
  });
});

// --- SIDEBAR DRAWER HAMBURGER & COLLAPSING ---

document.getElementById('menuToggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
});

// Handle Responsive Window Resizing
window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth > 768) {
    sidebar.classList.remove('mobile-open');
  } else {
    sidebar.classList.remove('collapsed');
  }
});

// Accordion Collapsing
document.querySelectorAll('.nav-group-header').forEach(header => {
  header.addEventListener('click', () => {
    const targetId = header.getAttribute('data-target');
    const items = document.getElementById(targetId);
    
    const isCollapsed = header.classList.toggle('collapsed');
    items.classList.toggle('collapsed-menu', isCollapsed);
  });
});

// Sidebar click handler (for mock navigation)
document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    const target = item.getAttribute('data-nav');
    showToast(`Navigated to ${target.replace('-', ' ')} (Mock Page)`, 'success');
    
    // Auto-close navigation drawer on mobile viewports
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('mobile-open');
    }
  });
});

// --- URL INSPECTOR FORM SUBMISSION ---

document.getElementById('inspectionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputVal = document.getElementById('inspectionSearchInput').value.trim();
  if (!inputVal) return;

  showToast("Retrieving data from Google Index...", "loading");

  // Simulate latency
  setTimeout(() => {
    document.getElementById('inspectedUrlLabel').textContent = inputVal;
    const statusCard = document.getElementById('inspectionStatusCard');
    const statusIcon = document.getElementById('inspectionStatusIcon');
    const statusTitle = document.getElementById('inspectionStatusTitle');
    const statusDesc = document.getElementById('inspectionStatusDesc');

    // Logic: If URL contains the current property domain, it's verified!
    const activeDomainHost = state.activeProperty.replace('https://', '').replace('/', '');
    const isMatch = inputVal.includes(activeDomainHost);

    if (isMatch) {
      statusIcon.textContent = "check_circle";
      statusIcon.className = "material-symbols-outlined inspection-status-icon success";
      statusTitle.textContent = "URL is on Google";
      statusDesc.textContent = "It can appear in Google Search results and is fully indexed.";
    } else {
      statusIcon.textContent = "warning";
      statusIcon.className = "material-symbols-outlined inspection-status-icon warning";
      statusTitle.textContent = "URL not in property";
      statusDesc.textContent = `This URL belongs to another property. Verify ownership of its domain to inspect.`;
    }

    // Hide loading, show modal
    dismissAllToasts();
    document.getElementById('inspectionModal').classList.add('show');
  }, 1000);
});

document.getElementById('inspectionModalClose').addEventListener('click', () => {
  document.getElementById('inspectionModal').classList.remove('show');
});

// --- EXPORT SIMULATION FLOW ---

document.getElementById('exportBtn').addEventListener('click', () => {
  document.getElementById('exportModal').classList.add('show');
});

document.getElementById('exportModalClose').addEventListener('click', () => {
  document.getElementById('exportModal').classList.remove('show');
});

document.querySelectorAll('.export-option-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    document.getElementById('exportModal').classList.remove('show');
    
    showToast(`Generating ${type.toUpperCase()} report...`, 'loading');
    
    setTimeout(() => {
      dismissAllToasts();
      showToast(`Exported successfully to ${type.toUpperCase()} format.`, 'success');
    }, 1500);
  });
});

// --- THEME SWITCH SYSTEM ---

document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  state.theme = isDark ? 'dark' : 'light';
  
  const icon = document.getElementById('themeToggleIcon');
  icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  
  // Re-render chart to update colors
  renderMainChart();
  showToast(`Switched to ${state.theme} mode`, 'success');
});

// --- TOAST NOTIFICATION SYSTEM HELPERS ---

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast-msg ${type}`;
  
  let iconMarkup = '<span class="material-symbols-outlined">info</span>';
  if (type === 'loading') {
    iconMarkup = '<span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>';
  } else if (type === 'warning') {
    iconMarkup = '<span class="material-symbols-outlined" style="color: #f29900;">warning</span>';
  } else if (type === 'success') {
    iconMarkup = '<span class="material-symbols-outlined" style="color: #137333;">check_circle</span>';
  }

  toast.innerHTML = `
    ${iconMarkup}
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Auto dismiss non-loading toasts after 3 seconds
  if (type !== 'loading') {
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }
}

function dismissAllToasts() {
  const container = document.getElementById('toastContainer');
  container.innerHTML = '';
}

// CSS Spinner rules injection for toast loader
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

// --- TOOLTIP IMPLEMENTATION SYSTEM ---

let activeTooltipEl = null;

document.querySelectorAll('[data-tip]').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const tipText = el.getAttribute('data-tip');
    
    // Create tooltip element
    activeTooltipEl = document.createElement('div');
    activeTooltipEl.className = 'tooltip-custom';
    activeTooltipEl.textContent = tipText;
    document.body.appendChild(activeTooltipEl);
    
    // Position tooltip
    const rect = el.getBoundingClientRect();
    activeTooltipEl.style.left = rect.left + window.scrollX + (rect.width / 2) - (activeTooltipEl.offsetWidth / 2) + 'px';
    activeTooltipEl.style.top = rect.top + window.scrollY - activeTooltipEl.offsetHeight - 8 + 'px';
    
    setTimeout(() => {
      if (activeTooltipEl) activeTooltipEl.classList.add('show');
    }, 20);
  });
  
  el.addEventListener('mouseleave', () => {
    if (activeTooltipEl) {
      activeTooltipEl.remove();
      activeTooltipEl = null;
    }
  });
});

// General document event listeners to close menus when clicking outside
document.addEventListener('click', (e) => {
  const propertyDropdown = document.getElementById('propertyDropdown');
  const propertySelectorBtn = document.getElementById('propertySelectorBtn');
  const dateDropdown = document.getElementById('dateDropdown');
  const dateFilterBtn = document.getElementById('dateFilterBtn');

  if (propertyDropdown.classList.contains('show') && !propertySelectorBtn.contains(e.target) && !propertyDropdown.contains(e.target)) {
    propertyDropdown.classList.remove('show');
    propertySelectorBtn.classList.remove('active');
  }

  if (dateDropdown.classList.contains('show') && !dateFilterBtn.contains(e.target) && !dateDropdown.contains(e.target)) {
    dateDropdown.classList.remove('show');
  }
});

// App logo reload simulation
document.getElementById('logoReload').addEventListener('click', () => {
  showToast("Refreshing overview dashboard metrics...", "loading");
  setTimeout(() => {
    dismissAllToasts();
    // Reset to defaults
    state.activeProperty = "https://pdf-converter.shop/";
    state.activeDays = "28";
    state.activeMetrics = { clicks: true, impressions: true, ctr: false, position: false };
    
    // Update dropdown items classes
    document.querySelectorAll('.date-option').forEach(o => {
      o.classList.toggle('selected', o.getAttribute('data-days') === '28');
    });
    document.getElementById('dateFilterLabel').textContent = 'Last 28 days';
    document.getElementById('activePropertyUrl').textContent = "https://pdf-converter.shop/";
    
    // Reset cards UI
    document.querySelectorAll('.kpi-card').forEach(card => {
      const metric = card.getAttribute('data-metric');
      card.classList.toggle('active', state.activeMetrics[metric]);
    });
    
    populatePropertyDropdown();
    updateUIElements();
    renderMainChart();
    showToast("Dashboard metrics re-initialized.", "success");
  }, 800);
});

// Feedbacks mock
document.getElementById('sendFeedbackBtn').addEventListener('click', () => {
  showToast("Loading Google feedback form...", "loading");
  setTimeout(() => {
    dismissAllToasts();
    showToast("Feedback dialog simulation loaded.", "success");
  }, 1000);
});

document.getElementById('bellBtn').addEventListener('click', () => {
  showToast("You have 1 new indexing alert for your site maps.", "info");
});

// --- INITIALIZE APPLICATION ---
window.addEventListener('DOMContentLoaded', () => {
  populatePropertyDropdown();
  updateUIElements();
  
  // Wait short tick for DOM measurements to render chart accurately
  setTimeout(() => {
    renderMainChart();
  }, 100);
});
