// Tab Navigation
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab and activate button
        document.getElementById(tabName).classList.add('active');
        this.classList.add('active');
        
        // Initialize charts if switching to analytics tab
        if (tabName === 'analytics') {
            setTimeout(() => {
                initializeCategoryChart();
                initializeProjectionChart();
            }, 100);
        }
    });
});

// Initialize Charts
let trendChart, expenseChart, incomeChart, categoryChart, projectionChart;

function initializeTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;
    
    if (trendChart) trendChart.destroy();
    
    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [120, 130, 150, 145, 160, 175],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Pengeluaran',
                    data: [80, 85, 90, 88, 92, 95],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: { size: 12, weight: 'bold' }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}

function initializeExpenseChart() {
    const ctx = document.getElementById('expenseChart');
    if (!ctx) return;
    
    if (expenseChart) expenseChart.destroy();
    
    expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Operasional', 'Gaji Karyawan', 'Marketing', 'Utilitas', 'Lainnya'],
            datasets: [
                {
                    data: [2.5, 45, 15, 5.8, 8.7],
                    backgroundColor: [
                        '#3b82f6',
                        '#8b5cf6',
                        '#ec4899',
                        '#f59e0b',
                        '#6b7280'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

function initializeIncomeChart() {
    const ctx = document.getElementById('incomeChart');
    if (!ctx) return;
    
    if (incomeChart) incomeChart.destroy();
    
    incomeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Penjualan', 'Layanan', 'Investasi'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [75, 50, 25],
                    backgroundColor: [
                        '#10b981',
                        '#06b6d4',
                        '#f59e0b'
                    ],
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}

function initializeCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    if (categoryChart) categoryChart.destroy();
    
    categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Operasional 3%', 'Gaji 53%', 'Marketing 18%', 'Utilitas 7%', 'Lainnya 10%'],
            datasets: [
                {
                    data: [3, 53, 18, 7, 10],
                    backgroundColor: [
                        '#3b82f6',
                        '#8b5cf6',
                        '#ec4899',
                        '#f59e0b',
                        '#6b7280'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}

function initializeProjectionChart() {
    const ctx = document.getElementById('projectionChart');
    if (!ctx) return;
    
    if (projectionChart) projectionChart.destroy();
    
    projectionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'],
            datasets: [
                {
                    label: 'Proyeksi Pendapatan',
                    data: [150, 160, 172, 185, 200, 218],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}

// Modal Functions
function openModal() {
    document.getElementById('transactionModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('transactionModal').style.display = 'none';
}

function addTransaction() {
    openModal();
}

// Filter Functions
function filterExpenses() {
    const monthFilter = document.getElementById('monthFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    const rows = document.querySelectorAll('#expenseTableBody tr');
    rows.forEach(row => {
        let show = true;
        
        if (monthFilter) {
            const rowDate = row.cells[0].textContent;
            if (!rowDate.startsWith(monthFilter)) show = false;
        }
        
        if (categoryFilter) {
            const rowCategory = row.cells[1].textContent.trim();
            if (!rowCategory.includes(categoryFilter)) show = false;
        }
        
        row.style.display = show ? '' : 'none';
    });
}

function filterIncome() {
    const monthFilter = document.getElementById('incomeMonthFilter').value;
    const sourceFilter = document.getElementById('sourceFilter').value;
    
    const rows = document.querySelectorAll('#incomeTableBody tr');
    rows.forEach(row => {
        let show = true;
        
        if (monthFilter) {
            const rowDate = row.cells[0].textContent;
            if (!rowDate.startsWith(monthFilter)) show = false;
        }
        
        if (sourceFilter) {
            const rowSource = row.cells[1].textContent.trim();
            if (!rowSource.includes(sourceFilter)) show = false;
        }
        
        row.style.display = show ? '' : 'none';
    });
}

// Edit Functions
function editExpense(id) {
    alert('Edit pengeluaran #' + id);
}

function editIncome(id) {
    alert('Edit pendapatan #' + id);
}

// Transaction Functions
function saveTransaction(event) {
    event.preventDefault();
    
    const type = document.getElementById('transType').value;
    const amount = document.getElementById('transAmount').value;
    const category = document.getElementById('transCategory').value;
    const description = document.getElementById('transDescription').value;
    const date = document.getElementById('transDate').value;
    
    console.log('Transaksi disimpan:', {
        type, amount, category, description, date
    });
    
    alert('Transaksi berhasil disimpan!');
    closeModal();
}

// Export Report
function exportReport() {
    const reportData = {
        date: new Date().toLocaleDateString('id-ID'),
        totalIncome: 'Rp 150.000.000',
        totalExpenses: 'Rp 85.000.000',
        balance: 'Rp 65.000.000'
    };
    
    let csvContent = "Laporan Keuangan\n";
    csvContent += "Tanggal: " + reportData.date + "\n\n";
    csvContent += "Total Pendapatan," + reportData.totalIncome + "\n";
    csvContent += "Total Pengeluaran," + reportData.totalExpenses + "\n";
    csvContent += "Saldo Bersih," + reportData.balance + "\n";
    
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    link.setAttribute('download', 'laporan_keuangan.csv');
    link.click();
    
    alert('Laporan berhasil diunduh!');
}

// Set Reminder
function setReminder() {
    const reminderDate = prompt('Masukkan tanggal pengingat (YYYY-MM-DD):');
    if (reminderDate) {
        alert('Pengingat diatur untuk tanggal: ' + reminderDate);
    }
}

// Generate Budget
function generateBudget() {
    alert('Fitur pembuatan anggaran sedang dikembangkan. Harap tunggu update selanjutnya.');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('transactionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    const formatted = now.toLocaleDateString('id-ID') + ' ' + now.toLocaleTimeString('id-ID');
    document.getElementById('updateTime').textContent = formatted;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTrendChart();
    initializeExpenseChart();
    initializeIncomeChart();
    updateTimestamp();
    
    // Update timestamp every minute
    setInterval(updateTimestamp, 60000);
});
