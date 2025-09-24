// Tigre ForecastPro - Main JavaScript
class ForecastApp {
  constructor() {
    this.currentPage = "dashboard";
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupEventListeners();
    this.loadPage("dashboard");
    this.initializeAnimations();
  }

  setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) {
          this.navigateTo(page);
        }
      });
    });
  }

  navigateTo(page) {
    // Remove active class from all nav items
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked item
    document.querySelector(`[data-page="${page}"]`).classList.add("active");

    // Load page content
    this.loadPage(page);
    this.currentPage = page;
  }

  loadPage(page) {
    const mainContent = document.querySelector(".main-content");

    // Add loading state
    mainContent.style.opacity = "0.5";

    setTimeout(() => {
      switch (page) {
        case "dashboard":
          this.loadDashboard();
          break;
        case "gerar-previsao":
          this.loadGerarPrevisao();
          break;
        case "automacao":
          this.loadAutomacao();
          break;
        case "historico":
          this.loadHistorico();
          break;
        case "fontes-dados":
          this.loadFontesDados();
          break;
        case "importar":
          this.loadImportar();
          break;
        case "relatorios":
          this.loadRelatorios();
          break;
        case "configuracoes":
          this.loadConfiguracoes();
          break;
        default:
          this.loadDashboard();
      }

      // Remove loading state
      mainContent.style.opacity = "1";
      this.initializePageAnimations();
    }, 300);
  }

  loadDashboard() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Dashboard de Previsões</h2>
                    <p>Análise e previsões de vendas inteligentes</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-primary" onclick="app.navigateTo('gerar-previsao')">
                        <i class="fas fa-plus"></i>
                        Nova Previsão
                    </button>
                    <button class="btn btn-secondary" onclick="app.navigateTo('automacao')">
                        <i class="fas fa-robot"></i>
                        Automação
                    </button>
                </div>
            </div>

            <!-- KPI Cards -->
            <div class="kpi-grid fade-in">
                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Previsão 30 dias</span>
                        <div class="kpi-icon icon-success">
                            <i class="fas fa-chart-line"></i>
                        </div>
                    </div>
                    <div class="kpi-value">R$ 2,4M</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-arrow-up"></i>
                        +12.5%
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Precisão do Modelo</span>
                        <div class="kpi-icon icon-primary">
                            <i class="fas fa-bullseye"></i>
                        </div>
                    </div>
                    <div class="kpi-value">94,2%</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-arrow-up"></i>
                        Excelente
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Automações Ativas</span>
                        <div class="kpi-icon icon-teal">
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                    <div class="kpi-value">8</div>
                    <div class="kpi-change neutral">
                        <i class="fas fa-play"></i>
                        Funcionando
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Última Atualização</span>
                        <div class="kpi-icon icon-warning">
                            <i class="fas fa-clock"></i>
                        </div>
                    </div>
                    <div class="kpi-value">2h</div>
                    <div class="kpi-change neutral">
                        <i class="fas fa-sync-alt"></i>
                        Sincronizado
                    </div>
                </div>
            </div>

            <!-- Chart Grid -->
            <div class="chart-grid slide-up">
                <div class="chart-card">
                    <div class="chart-header">
                        <div>
                            <div class="chart-title">Previsão de Vendas</div>
                            <div class="chart-subtitle">Histórico + Previsão + Intervalo de Confiança</div>
                        </div>
                        <div class="chart-controls">
                            <select class="select" onchange="app.updateChartPeriod(this.value)">
                                <option value="12">12 meses</option>
                                <option value="18" selected>18 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                            <button class="btn btn-secondary-dark" style="padding: 8px 12px; font-size: 12px;">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                    <div class="chart-placeholder" onclick="app.showChartModal()">
                        <i class="fas fa-chart-area" style="font-size: 24px; margin-right: 10px;"></i>
                        Gráfico de Previsão Interativo - Clique para expandir
                    </div>
                </div>

                <div class="chart-card">
                    <div class="chart-header">
                        <div class="chart-title">Ações Rápidas</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <button class="btn btn-primary" style="justify-content: flex-start;" onclick="app.navigateTo('gerar-previsao')">
                            <i class="fas fa-magic"></i>
                            Nova Previsão
                        </button>
                        <div style="font-size: 12px; color: #6b7280; margin-bottom: 10px;">
                            Gere previsões personalizadas com diferentes históricos temporais
                        </div>
                        
                        <button class="btn btn-secondary-dark" style="justify-content: flex-start;" onclick="app.navigateTo('automacao')">
                            <i class="fas fa-robot"></i>
                            Automação
                        </button>
                        <div style="font-size: 12px; color: #6b7280; margin-bottom: 10px;">
                            Configure previsões automáticas recorrentes
                        </div>
                        
                        <button class="btn btn-secondary-dark" style="justify-content: flex-start; " onclick="app.showInsights()">
                            <i class="fas fa-lightbulb"></i>
                            IA Insights
                        </button>
                        <div style="font-size: 12px; color: #6b7280;">
                            Detectamos um padrão sazonal forte. Considere ajustar estratégia para Q4.
                        </div>
                        <a href="#" style="color: #3b82f6; font-size: 12px; font-weight: 500;" onclick="app.showInsights()">Ver Detalhes →</a>
                    </div>
                </div>
            </div>

            <!-- Bottom Grid -->
            <div class="bottom-grid slide-up">
                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Precisão do Modelo</div>
                        <div class="kpi-icon icon-success" style="width: 32px; height: 32px; font-size: 14px;">
                            <i class="fas fa-chart-bar"></i>
                        </div>
                    </div>
                    <div class="chart-placeholder" style="height: 200px;">
                        Gráfico de Precisão Histórica (WMAPE, FVA, Bias)
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Fatores Influentes</div>
                        <div class="kpi-icon icon-teal" style="width: 32px; height: 32px; font-size: 14px;">
                            <i class="fas fa-sliders-h"></i>
                        </div>
                    </div>
                    <div class="factors-chart">
                        <div class="factor-item">
                            <div class="factor-name">Sazonalidade</div>
                            <div class="factor-bar">
                                <div class="factor-fill sazonalidade" style="width: 85%;"></div>
                            </div>
                            <div class="factor-value">85%</div>
                        </div>
                        <div class="factor-item">
                            <div class="factor-name">Tendência</div>
                            <div class="factor-bar">
                                <div class="factor-fill tendencia" style="width: 72%;"></div>
                            </div>
                            <div class="factor-value">72%</div>
                        </div>
                        <div class="factor-item">
                            <div class="factor-name">Marketing</div>
                            <div class="factor-bar">
                                <div class="factor-fill marketing" style="width: 45%;"></div>
                            </div>
                            <div class="factor-value">45%</div>
                        </div>
                        <div class="factor-item">
                            <div class="factor-name">Externos</div>
                            <div class="factor-bar">
                                <div class="factor-fill externos" style="width: 28%;"></div>
                            </div>
                            <div class="factor-value">28%</div>
                        </div>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Previsões Recentes</div>
                        <a href="#" class="btn btn-secondary-dark" onclick="app.navigateTo('historico')">Ver Todas</a>
                    </div>
                    <div>
                        <div class="info-item">
                            <div class="status-icon status-success"></div>
                            <div class="info-content">
                                <div class="info-name">Previsão Q1 2024</div>
                                <div class="info-detail">36 SKUs • Executado</div>
                            </div>
                            <div class="info-value">3h atrás</div>
                        </div>
                        <div class="info-item">
                            <div class="status-icon status-warning"></div>
                            <div class="info-content">
                                <div class="info-name">Automação Mensal</div>
                                <div class="info-detail">72 SKUs • Executando</div>
                            </div>
                            <div class="info-value">1d atrás</div>
                        </div>
                        <div class="info-item">
                            <div class="status-icon status-success"></div>
                            <div class="info-content">
                                <div class="info-name">Análise Sazonal</div>
                                <div class="info-detail">Finalizado Ontem</div>
                            </div>
                            <div class="info-value">2d atrás</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;
  }

  loadGerarPrevisao() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Gerar Nova Previsão</h2>
                    <p>Configure e execute previsões personalizadas</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="app.navigateTo('dashboard')">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                </div>
            </div>


                <form id="form-previsao" class="chart-card">
                    <div class="chart-header">
                        <div class="chart-title">Configuração da Previsão</div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="form-group">
                            <label class="form-label">Horizonte de Previsão</label>
                            <select name="periods" class="select" style="width: 100%;" required>
                                <option value="6" selected>6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="18">18 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">SKU para Previsão</label>
                            <input type="text" name="sku" class="form-input" required>
                        </div>
                    </div>

                    <div style="margin-top: 32px; text-align: center;">
                        <button class="btn btn-primary" style="padding: 16px 48px; font-size: 16px;" onclick="app.executePrevisao()">
                            <i class="fas fa-magic"></i>
                            Executar Previsão
                        </button>
                    </div>
                </form>

            <!-- Status de Execução (Hidden by default) -->
            <div id="execution-status" class="chart-card" style="display: none; margin-top: 24px;">
                <div class="chart-header">
                    <div class="chart-title">Status da Execução</div>
                </div>
                <div id="execution-content">
                    <!-- Conteúdo será preenchido via JavaScript -->
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;

    document
      .querySelector("#form-previsao")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        this.dataPrevisao = undefined;

        const formData = new FormData(event.target);

        const formValues = Object.fromEntries(formData.entries());

        formValues.periods = parseInt(formValues.periods);
        formValues.preview_rows = formValues.periods;

        console.log(formValues);

        fetch("http://localhost:8000/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => response.json())
          .then((data) => {
            this.dataPrevisao = data;
          })
          .catch((error) => {
            this.dataPrevisao = undefined;
          });
      });
  }

  loadAutomacao() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Automações</h2>
                    <p>Configure e monitore previsões automáticas</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-primary" onclick="app.showNovaAutomacao()">
                        <i class="fas fa-plus"></i>
                        Nova Automação
                    </button>
                    <button class="btn btn-secondary" onclick="app.navigateTo('dashboard')">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                </div>
            </div>

            <div class="kpi-grid fade-in">
                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Automações Ativas</span>
                        <div class="kpi-icon icon-success">
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                    <div class="kpi-value">8</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-play"></i>
                        Funcionando
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Execuções Hoje</span>
                        <div class="kpi-icon icon-primary">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                    </div>
                    <div class="kpi-value">24</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-arrow-up"></i>
                        +15%
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Taxa de Sucesso</span>
                        <div class="kpi-icon icon-success">
                            <i class="fas fa-check-circle"></i>
                        </div>
                    </div>
                    <div class="kpi-value">97,3%</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-arrow-up"></i>
                        Excelente
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Próxima Execução</span>
                        <div class="kpi-icon icon-warning">
                            <i class="fas fa-clock"></i>
                        </div>
                    </div>
                    <div class="kpi-value">2h 15m</div>
                    <div class="kpi-change neutral">
                        <i class="fas fa-calendar"></i>
                        Agendado
                    </div>
                </div>
            </div>

            <div class="bottom-grid slide-up">
                <div class="info-card" style="grid-column: span 2;">
                    <div class="info-header">
                        <div class="info-title">Automações Configuradas</div>
                        <a href="#" class="view-all" onclick="app.showHistoricoAutomacoes()">Ver Histórico</a>
                    </div>
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Frequência</th>
                                    <th>Última Execução</th>
                                    <th>Próxima</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Previsão Semanal Predial</strong><br>
                                        <small style="color: #6b7280;">156 SKUs • Modelo Prophet</small>
                                    </td>
                                    <td>Semanal</td>
                                    <td>05/09 08:00</td>
                                    <td>12/09 08:00</td>
                                    <td><span class="status-icon status-success"></span> Ativo</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Relatório Mensal Executivo</strong><br>
                                        <small style="color: #6b7280;">Todos os SKUs • Dashboard</small>
                                    </td>
                                    <td>Mensal</td>
                                    <td>01/09 06:00</td>
                                    <td>01/10 06:00</td>
                                    <td><span class="status-icon status-success"></span> Ativo</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Alertas de Desvio</strong><br>
                                        <small style="color: #6b7280;">Monitoramento • Threshold 15%</small>
                                    </td>
                                    <td>Diária</td>
                                    <td>04/09 23:59</td>
                                    <td>05/09 23:59</td>
                                    <td><span class="status-icon status-error"></span> Erro</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-exclamation-triangle"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Configuração Rápida</div>
                    </div>
                    <div class="info-btns" style="display: flex; flex-direction: column;">
                        <button class="btn btn-primary" style="justify-content: flex-start;">
                            <i class="fas fa-calendar-plus"></i>
                            Previsão Recorrente
                        </button>
                        <button class="btn btn-secondary-dark" style="justify-content: flex-start;">
                            <i class="fas fa-bell"></i>
                            Alertas de Desvio
                        </button>
                        <button class="btn btn-secondary-dark" style="justify-content: flex-start;">
                            <i class="fas fa-file-export"></i>
                            Relatório Automático
                        </button>
                        <button class="btn btn-secondary-dark" style="justify-content: flex-start;">
                            <i class="fas fa-sync"></i>
                            Sincronização de Dados
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;
  }

  loadHistorico() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Histórico de Previsões</h2>
                    <p>Visualize e compare previsões anteriores</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="app.navigateTo('dashboard')">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                    <button class="btn btn-primary" onclick="app.exportarHistorico()">
                        <i class="fas fa-download"></i>
                        Exportar
                    </button>
                </div>
            </div>

            <div class="chart-card fade-in">
                <div class="chart-header">
                    <div>
                        <div class="chart-title">Filtros</div>
                        <div class="chart-subtitle">Refine sua busca por período, modelo ou SKU</div>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
                    <div class="form-group">
                        <label class="form-label">Período</label>
                        <select class="select" style="width: 100%;">
                            <option>Últimos 30 dias</option>
                            <option>Últimos 90 dias</option>
                            <option>Último ano</option>
                            <option>Personalizado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Modelo</label>
                        <select class="select" style="width: 100%;">
                            <option>Todos</option>
                            <option>ARIMA</option>
                            <option>Prophet</option>
                            <option>LSTM</option>
                            <option>Exponential</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="select" style="width: 100%;">
                            <option>Todos</option>
                            <option>Concluído</option>
                            <option>Em Progresso</option>
                            <option>Erro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Buscar</label>
                        <input type="text" class="form-input" placeholder="Nome da previsão ou SKU...">
                    </div>
                </div>
            </div>

            <div class="bottom-grid">
                <div class="info-card" style="grid-column: span 3;">
                    <div class="info-header">
                        <div class="info-title">Histórico de Execuções</div>
                    </div>
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Nome</th>
                                    <th>Modelo</th>
                                    <th>SKUs</th>
                                    <th>WMAPE</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>05/09/2025<br><small>08:30</small></td>
                                    <td>
                                        <strong>Previsão Q1 2025</strong><br>
                                        <small style="color: #6b7280;">18 meses • Predial</small>
                                    </td>
                                    <td>Prophet</td>
                                    <td>156</td>
                                    <td><span style="color: #059669; font-weight: 600;">8.2%</span></td>
                                    <td><span class="status-icon status-success"></span> Concluído</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;" onclick="app.visualizarPrevisao('q1-2025')">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>03/09/2025<br><small>14:15</small></td>
                                    <td>
                                        <strong>Análise Sazonal</strong><br>
                                        <small style="color: #6b7280;">12 meses • Todos SKUs</small>
                                    </td>
                                    <td>ARIMA</td>
                                    <td>342</td>
                                    <td><span style="color: #059669; font-weight: 600;">12.4%</span></td>
                                    <td><span class="status-icon status-success"></span> Concluído</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01/09/2025<br><small>06:00</small></td>
                                    <td>
                                        <strong>Automação Mensal</strong><br>
                                        <small style="color: #6b7280;">18 meses • Irrigação</small>
                                    </td>
                                    <td>LSTM</td>
                                    <td>89</td>
                                    <td><span style="color: #d97706; font-weight: 600;">15.8%</span></td>
                                    <td><span class="status-icon status-warning"></span> Revisão</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>28/08/2025<br><small>20:45</small></td>
                                    <td>
                                        <strong>Teste A/B Modelos</strong><br>
                                        <small style="color: #6b7280;">6 meses • Comparativo</small>
                                    </td>
                                    <td>Multiple</td>
                                    <td>50</td>
                                    <td><span style="color: #059669; font-weight: 600;">9.1%</span></td>
                                    <td><span class="status-icon status-success"></span> Concluído</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;
  }

  loadFontesDados() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Fontes de Dados</h2>
                    <p>Gerencie conexões e fontes de dados</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-primary" onclick="app.showNovaFonte()">
                        <i class="fas fa-plus"></i>
                        Nova Fonte
                    </button>
                    <button class="btn btn-secondary" onclick="app.navigateTo('dashboard')">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                </div>
            </div>

            <div class="kpi-grid fade-in">
                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Fontes Ativas</span>
                        <div class="kpi-icon icon-success">
                            <i class="fas fa-database"></i>
                        </div>
                    </div>
                    <div class="kpi-value">6</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-plug"></i>
                        Conectadas
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Última Sincronização</span>
                        <div class="kpi-icon icon-primary">
                            <i class="fas fa-sync-alt"></i>
                        </div>
                    </div>
                    <div class="kpi-value">15min</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-check"></i>
                        Sucesso
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Volume de Dados</span>
                        <div class="kpi-icon icon-teal">
                            <i class="fas fa-chart-bar"></i>
                        </div>
                    </div>
                    <div class="kpi-value">2.4GB</div>
                    <div class="kpi-change neutral">
                        <i class="fas fa-database"></i>
                        Armazenado
                    </div>
                </div>

                <div class="kpi-card">
                    <div class="kpi-header">
                        <span class="kpi-title">Qualidade</span>
                        <div class="kpi-icon icon-success">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                    </div>
                    <div class="kpi-value">98.7%</div>
                    <div class="kpi-change positive">
                        <i class="fas fa-arrow-up"></i>
                        Excelente
                    </div>
                </div>
            </div>

            <div class="bottom-grid slide-up">
                <div class="info-card" style="grid-column: span 2;">
                    <div class="info-header">
                        <div class="info-title">Fontes Configuradas</div>
                    </div>
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Fonte</th>
                                    <th>Tipo</th>
                                    <th>Última Sync</th>
                                    <th>Registros</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-server" style="color: #3b82f6;"></i>
                                            <strong>SAP ECC</strong>
                                        </div>
                                        <small style="color: #6b7280;">Dados de vendas</small>
                                    </td>
                                    <td>ERP</td>
                                    <td>Há 15 min</td>
                                    <td>1.2M</td>
                                    <td><span class="status-icon status-success"></span> Ativo</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-cog"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-cloud" style="color: #10b981;"></i>
                                            <strong>OpenWeather API</strong>
                                        </div>
                                        <small style="color: #6b7280;">Dados climáticos</small>
                                    </td>
                                    <td>API</td>
                                    <td>Há 1 hora</td>
                                    <td>850K</td>
                                    <td><span class="status-icon status-success"></span> Ativo</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-cog"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-file-excel" style="color: #f59e0b;"></i>
                                            <strong>Dados Marketing</strong>
                                        </div>
                                        <small style="color: #6b7280;">Campanhas e promoções</small>
                                    </td>
                                    <td>Excel</td>
                                    <td>Há 2 dias</td>
                                    <td>25K</td>
                                    <td><span class="status-icon status-warning"></span> Pendente</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-upload"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-calendar" style="color: #8b5cf6;"></i>
                                            <strong>Calendário BR</strong>
                                        </div>
                                        <small style="color: #6b7280;">Feriados e eventos</small>
                                    </td>
                                    <td>API</td>
                                    <td>Há 12 horas</td>
                                    <td>2.5K</td>
                                    <td><span class="status-icon status-success"></span> Ativo</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-cog"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Tipos de Fonte</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <button class="btn btn-primary" style="justify-content: flex-start;" onclick="app.showConexaoSAP()">
                            <i class="fas fa-server"></i>
                            Conexão SAP
                        </button>
                        <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;" onclick="app.showConexaoAPI()">
                            <i class="fas fa-plug"></i>
                            API Externa
                        </button>
                        <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;" onclick="app.navigateTo('importar')">
                            <i class="fas fa-file-upload"></i>
                            Arquivo (CSV/Excel)
                        </button>
                        <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;" onclick="app.showConexaoDB()">
                            <i class="fas fa-database"></i>
                            Banco de Dados
                        </button>
                    </div>

                    <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                        <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: #374151;">Monitoramento</h4>
                        <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 8px;">
                            <span style="font-size: 13px; color: #6b7280;">Uso de API</span>
                            <span style="font-size: 13px; font-weight: 600;">78%</span>
                        </div>
                        <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #3b82f6, #2563eb); height: 100%; width: 78%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;
  }

  loadImportar() {
    const content = `
            <div class="header">
                <div class="header-left">
                    <h2>Importar Dados</h2>
                    <p>Faça upload de arquivos e configure importações automáticas</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="app.navigateTo('fontes-dados')">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                </div>
            </div>

            <div class="chart-grid fade-in">
                <div class="chart-card">
                    <div class="chart-header">
                        <div class="chart-title">Upload de Arquivo</div>
                        <div class="chart-subtitle">Arraste arquivos ou clique para selecionar</div>
                    </div>
                    <div class="upload-area" id="upload-area">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <h3>Arraste seus arquivos aqui</h3>
                        <p>Suporte para CSV, Excel (.xlsx, .xls) até 50MB</p>
                        <button class="btn btn-primary" style="margin-top: 16px;" onclick="document.getElementById('file-input').click()">
                            <i class="fas fa-folder-open"></i>
                            Selecionar Arquivos
                        </button>
                        <input type="file" id="file-input" multiple accept=".csv,.xlsx,.xls" style="display: none;" onchange="app.handleFileSelect(this.files)">
                    </div>

                    <div id="upload-progress" style="display: none; margin-top: 20px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="font-size: 14px; font-weight: 600;">Processando...</span>
                            <span id="progress-percent" style="font-size: 14px;">0%</span>
                        </div>
                        <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                            <div id="progress-bar" style="background: linear-gradient(90deg, #3b82f6, #2563eb); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </div>

                <div class="chart-card">
                    <div class="chart-header">
                        <div class="chart-title">Scripts de Automação</div>
                        <div class="chart-subtitle">Configure importações recorrentes</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px;">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                <i class="fas fa-file-excel" style="color: #10b981; font-size: 20px;"></i>
                                <h4 style="font-size: 16px; font-weight: 600; color: #374151;">Script Excel/CSV</h4>
                            </div>
                            <p style="font-size: 13px; color: #6b7280; margin-bottom: 16px;">
                                Configure um script para importação automática de planilhas de um diretório específico
                            </p>
                            <button class="btn btn-outline" onclick="app.showScriptExcel()">
                                <i class="fas fa-cog"></i>
                                Configurar Script
                            </button>
                        </div>

                        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px;">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                <i class="fas fa-database" style="color: #3b82f6; font-size: 20px;"></i>
                                <h4 style="font-size: 16px; font-weight: 600; color: #374151;">Conexão SQL</h4>
                            </div>
                            <p style="font-size: 13px; color: #6b7280; margin-bottom: 16px;">
                                Configure uma conexão direta com banco de dados para sincronização automática
                            </p>
                            <button class="btn btn-outline" onclick="app.showConexaoSQL()">
                                <i class="fas fa-plug"></i>
                                Configurar Conexão
                            </button>
                        </div>

                        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px;">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                <i class="fas fa-clock" style="color: #f59e0b; font-size: 20px;"></i>
                                <h4 style="font-size: 16px; font-weight: 600; color: #374151;">Agendamento</h4>
                            </div>
                            <p style="font-size: 13px; color: #6b7280; margin-bottom: 16px;">
                                Configure horários específicos para execução automática de importações
                            </p>
                            <button class="btn btn-outline" onclick="app.showAgendamento()">
                                <i class="fas fa-calendar-alt"></i>
                                Configurar Horários
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-grid slide-up">
                <div class="info-card" style="grid-column: span 2;">
                    <div class="info-header">
                        <div class="info-title">Histórico de Importações</div>
                        <a href="#" class="view-all">Ver Todos</a>
                    </div>
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Arquivo</th>
                                    <th>Data</th>
                                    <th>Registros</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-file-excel" style="color: #10b981;"></i>
                                            <strong>vendas_setembro.xlsx</strong>
                                        </div>
                                        <small style="color: #6b7280;">2.4 MB</small>
                                    </td>
                                    <td>05/09 14:30</td>
                                    <td>25.680</td>
                                    <td><span class="status-icon status-success"></span> Sucesso</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-file-csv" style="color: #3b82f6;"></i>
                                            <strong>marketing_campaigns.csv</strong>
                                        </div>
                                        <small style="color: #6b7280;">1.1 MB</small>
                                    </td>
                                    <td>04/09 09:15</td>
                                    <td>8.450</td>
                                    <td><span class="status-icon status-success"></span> Sucesso</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <i class="fas fa-file-excel" style="color: #f59e0b;"></i>
                                            <strong>estoque_agosto.xlsx</strong>
                                        </div>
                                        <small style="color: #6b7280;">3.2 MB</small>
                                    </td>
                                    <td>02/09 16:45</td>
                                    <td>12.340</td>
                                    <td><span class="status-icon status-warning"></span> Com Erros</td>
                                    <td>
                                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                            <i class="fas fa-exclamation-triangle"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-title">Validação de Dados</div>
                    </div>
                    <div style="background: rgba(59, 130, 246, 0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: #1e40af; margin-bottom: 12px;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Regras Ativas
                        </h4>
                        <ul style="font-size: 13px; color: #374151; line-height: 1.6;">
                            <li>• Validação de formato de datas</li>
                            <li>• Verificação de SKUs válidos</li>
                            <li>• Detecção de valores negativos</li>
                            <li>• Validação de colunas obrigatórias</li>
                        </ul>
                    </div>
                    
                    <button class="btn btn-secondary" style="width: 100%; justify-content: center;">
                        <i class="fas fa-cog"></i>
                        Configurar Validações
                    </button>
                </div>
            </div>
        `;

    document.querySelector(".main-content").innerHTML = content;
    this.setupUploadArea();
  }

  // Event handlers e utility functions
  setupEventListeners() {
    // Global event listeners
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        this.showShortcuts();
      }
    });
  }

  setupUploadArea() {
    const uploadArea = document.getElementById("upload-area");
    if (uploadArea) {
      uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("dragover");
      });

      uploadArea.addEventListener("dragleave", () => {
        uploadArea.classList.remove("dragover");
      });

      uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("dragover");
        this.handleFileSelect(e.dataTransfer.files);
      });
    }
  }

  handleFileSelect(files) {
    if (files.length === 0) return;

    const progressDiv = document.getElementById("upload-progress");
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");

    progressDiv.style.display = "block";

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 100) progress = 100;

      progressBar.style.width = progress + "%";
      progressPercent.textContent = Math.round(progress) + "%";

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.showUploadSuccess(files);
          progressDiv.style.display = "none";
        }, 500);
      }
    }, 200);
  }

  showUploadSuccess(files) {
    const fileNames = Array.from(files)
      .map((f) => f.name)
      .join(", ");
    this.showNotification(
      `Sucesso! ${files.length} arquivo(s) importado(s): ${fileNames}`,
      "success"
    );
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "#10b981"
                : type === "error"
                ? "#ef4444"
                : "#3b82f6"
            };
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

    notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-${
                  type === "success"
                    ? "check"
                    : type === "error"
                    ? "times"
                    : "info"
                }"></i>
                ${message}
            </div>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  // Page-specific functions
  updateChartPeriod(months) {
    console.log(`Updating chart period to ${months} months`);
    this.showNotification(`Gráfico atualizado para ${months} meses`, "success");
  }

  executePrevisao() {
    const statusDiv = document.getElementById("execution-status");
    const contentDiv = document.getElementById("execution-content");

    statusDiv.style.display = "block";

    // Simulate execution steps
    const steps = [
      "Carregando dados históricos...",
      "Aplicando transformações...",
      "Treinando modelo Prophet...",
      "Validando resultados...",
      "Gerando previsões...",
    ];

    let currentStep = 0;

    const updateStatus = () => {
      if (currentStep < steps.length) {
        contentDiv.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div class="loading">
                            <div class="spinner"></div>
                            ${steps[currentStep]}
                        </div>
                    </div>
                    <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #3b82f6, #2563eb); height: 100%; width: ${
                          ((currentStep + 1) / steps.length) * 100
                        }%; transition: width 0.3s ease;"></div>
                    </div>
                `;

        currentStep++;
        setTimeout(updateStatus, 1500);
      } else if (this.dataPrevisao) {
        contentDiv.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <canvas id="chart-previsao" style="width: 100%"></canvas>
                    </div>
                `;

        const canva = document.querySelector("#chart-previsao");

        const data = this.dataPrevisao;
        const previews = data.preview;

        new Chart(canva, {
          type: "line",
          data: {
            labels: previews.map((e) =>
              new Date(e.ds).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            ),
            datasets: [
              {
                label: "Previsão Futura",
                data: previews.map((e) => e.yhat),
                fill: false,
                borderColor: "rgba(63, 130, 255, 1)",
                tension: 0.1,
              },
              // {
              //     label: 'Safe Zone',
              //     data: previews.map(e => e.yhat_upper),
              //     fill: '-1', // fill to previous dataset (yhat_lower)
              //     backgroundColor: 'rgba(63, 130, 255, 0.15)',
              //     borderColor: 'rgba(63, 130, 255, 0.0)',
              //     pointRadius: 0,
              //     tension: 0.1
              // },
              // {
              //     label: 'Safe Zone Lower',
              //     data: previews.map(e => e.yhat_lower),
              //     backgroundColor: 'rgba(63, 130, 255, 0.15)',
              //     borderColor: 'rgba(63, 130, 255, 0.0)',
              //     fill: '-1',
              //     pointRadius: 0,
              //     tension: 0.1
              // }
            ],
          },
          options: {
            plugins: {
              legend: {
                display: true,
                labels: {
                  filter: (legendItem) => legendItem.text !== "Safe Zone Lower",
                },
              },
            },
          },
        });
      } else {
        setTimeout(updateStatus, 1500);
      }
    };

    updateStatus();
  }

  initializeAnimations() {
    // Add animation classes to elements as they appear
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    // Observe elements with slide-up class
    setTimeout(() => {
      document.querySelectorAll(".slide-up").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease";
        observer.observe(el);
      });
    }, 100);
  }

  initializePageAnimations() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      setTimeout(() => {
        el.style.transition = "all 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 100);
    });

    this.initializeAnimations();
  }

  // Modal and utility functions
  showChartModal() {
    this.showNotification("Modal do gráfico seria aberto aqui", "info");
  }

  showInsights() {
    this.showNotification("Insights detalhados da IA seriam exibidos", "info");
  }

  showNovaAutomacao() {
    this.showNotification("Modal de nova automação seria aberto", "info");
  }

  showNovaFonte() {
    this.showNotification("Modal de nova fonte de dados seria aberto", "info");
  }

  exportarHistorico() {
    this.showNotification("Exportando histórico...", "success");
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new ForecastApp();
});
