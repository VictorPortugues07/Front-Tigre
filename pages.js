// Extensão do ForecastApp para páginas restantes

// Adicionar estas funções à classe ForecastApp
ForecastApp.prototype.loadRelatorios = function () {
  const content = `
        <div class="header">
            <div class="header-left">
                <h2>Relatórios</h2>
                <p>Análises detalhadas e exportação de dados</p>
            </div>
            <div class="header-actions">
                <button class="btn btn-primary" onclick="app.gerarRelatorio()">
                    <i class="fas fa-file-pdf"></i>
                    Gerar Relatório
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
                    <span class="kpi-title">Relatórios Gerados</span>
                    <div class="kpi-icon icon-primary">
                        <i class="fas fa-file-alt"></i>
                    </div>
                </div>
                <div class="kpi-value">127</div>
                <div class="kpi-change positive">
                    <i class="fas fa-arrow-up"></i>
                    +23 este mês
                </div>
            </div>

            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Downloads</span>
                    <div class="kpi-icon icon-success">
                        <i class="fas fa-download"></i>
                    </div>
                </div>
                <div class="kpi-value">1.4K</div>
                <div class="kpi-change positive">
                    <i class="fas fa-arrow-up"></i>
                    +18%
                </div>
            </div>

            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Compartilhamentos</span>
                    <div class="kpi-icon icon-teal">
                        <i class="fas fa-share-alt"></i>
                    </div>
                </div>
                <div class="kpi-value">89</div>
                <div class="kpi-change positive">
                    <i class="fas fa-arrow-up"></i>
                    +12%
                </div>
            </div>

            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Templates</span>
                    <div class="kpi-icon icon-warning">
                        <i class="fas fa-template"></i>
                    </div>
                </div>
                <div class="kpi-value">15</div>
                <div class="kpi-change neutral">
                    <i class="fas fa-layer-group"></i>
                    Disponíveis
                </div>
            </div>
        </div>

        <div class="chart-grid slide-up">
            <div class="chart-card">
                <div class="chart-header">
                    <div>
                        <div class="chart-title">Gerador de Relatórios</div>
                        <div class="chart-subtitle">Configure seu relatório personalizado</div>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div>
                        <div class="form-group">
                            <label class="form-label">Tipo de Relatório</label>
                            <select class="select" style="width: 100%;">
                                <option value="executive">Relatório Executivo</option>
                                <option value="accuracy">Análise de Acurácia</option>
                                <option value="comparison">Comparação de Modelos</option>
                                <option value="forecast-detail">Detalhamento de Previsões</option>
                                <option value="custom">Personalizado</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Período</label>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                                <input type="date" class="form-input" value="2025-08-01">
                                <input type="date" class="form-input" value="2025-09-05">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Formato de Saída</label>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                                <label style="display: flex; align-items: center; gap: 6px; font-size: 13px;">
                                    <input type="radio" name="format" value="pdf" checked> PDF
                                </label>
                                <label style="display: flex; align-items: center; gap: 6px; font-size: 13px;">
                                    <input type="radio" name="format" value="excel"> Excel
                                </label>
                                <label style="display: flex; align-items: center; gap: 6px; font-size: 13px;">
                                    <input type="radio" name="format" value="powerpoint"> PowerPoint
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div class="form-group">
                            <label class="form-label">Seções Incluídas</label>
                            <div style="max-height: 200px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox" checked> Resumo Executivo
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox" checked> Métricas de Acurácia
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox" checked> Gráficos de Previsão
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox"> Comparação de Modelos
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox"> Análise por SKU
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox"> Fatores Influentes
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px;">
                                    <input type="checkbox"> Recomendações IA
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 24px;">
                    <button class="btn btn-primary" style="padding: 14px 32px;" onclick="app.gerarRelatorio()">
                        <i class="fas fa-cog"></i>
                        Gerar Relatório
                    </button>
                </div>
            </div>

            <div class="chart-card">
                <div class="chart-header">
                    <div class="chart-title">Templates Disponíveis</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px; max-height: 400px; overflow-y: auto;">
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; cursor: pointer;" onclick="app.selectTemplate('executive')">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="fas fa-chart-line" style="color: #3b82f6; font-size: 20px;"></i>
                            <div>
                                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Relatório Executivo</h4>
                                <p style="font-size: 12px; color: #6b7280;">Visão geral das previsões e KPIs principais</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; cursor: pointer;" onclick="app.selectTemplate('accuracy')">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="fas fa-target" style="color: #10b981; font-size: 20px;"></i>
                            <div>
                                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Análise de Acurácia</h4>
                                <p style="font-size: 12px; color: #6b7280;">WMAPE, FVA, Bias e métricas detalhadas</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; cursor: pointer;" onclick="app.selectTemplate('comparison')">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="fas fa-balance-scale" style="color: #f59e0b; font-size: 20px;"></i>
                            <div>
                                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Comparação de Modelos</h4>
                                <p style="font-size: 12px; color: #6b7280;">Compare performance entre diferentes algoritmos</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; cursor: pointer;" onclick="app.selectTemplate('seasonal')">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i class="fas fa-calendar-alt" style="color: #8b5cf6; font-size: 20px;"></i>
                            <div>
                                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Análise Sazonal</h4>
                                <p style="font-size: 12px; color: #6b7280;">Padrões sazonais e tendências de longo prazo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-grid slide-up">
            <div class="info-card" style="grid-column: span 2;">
                <div class="info-header">
                    <div class="info-title">Histórico de Relatórios</div>
                    <a href="#" class="view-all">Ver Todos</a>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Relatório</th>
                                <th>Data</th>
                                <th>Tipo</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Relatório Executivo Q3</strong><br>
                                    <small style="color: #6b7280;">Agosto - Setembro 2025</small>
                                </td>
                                <td>05/09 10:30</td>
                                <td>PDF</td>
                                <td><span class="status-icon status-success"></span> Concluído</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-download"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Análise Acurácia Agosto</strong><br>
                                    <small style="color: #6b7280;">Comparativo mensal</small>
                                </td>
                                <td>04/09 16:45</td>
                                <td>Excel</td>
                                <td><span class="status-icon status-success"></span> Concluído</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-download"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Dashboard Automático</strong><br>
                                    <small style="color: #6b7280;">Geração semanal</small>
                                </td>
                                <td>02/09 08:00</td>
                                <td>PowerPoint</td>
                                <td><span class="status-icon status-warning"></span> Processando</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-clock"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="info-card">
                <div class="info-header">
                    <div class="info-title">Configurações</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-palette"></i>
                        Personalizar Template
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-calendar-plus"></i>
                        Agendar Relatório
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-envelope"></i>
                        Configurar Email
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-cog"></i>
                        Configurações Avançadas
                    </button>
                </div>
            </div>
        </div>
    `;

  document.querySelector(".main-content").innerHTML = content;
};

ForecastApp.prototype.loadConfiguracoes = function () {
  const content = `
        <div class="header">
            <div class="header-left">
                <h2>Configurações</h2>
                <p>Gerencie preferências e configurações do sistema</p>
            </div>
            <div class="header-actions">
                <button class="btn btn-primary" onclick="app.salvarConfiguracoes()">
                    <i class="fas fa-save"></i>
                    Salvar Alterações
                </button>
                <button class="btn btn-secondary" onclick="app.navigateTo('dashboard')">
                    <i class="fas fa-arrow-left"></i>
                    Voltar
                </button>
            </div>
        </div>

        <div class="chart-grid fade-in">
            <div class="chart-card">
                <div class="chart-header">
                    <div class="chart-title">Configurações Gerais</div>
                </div>
                <div style="display: grid; gap: 24px;">
                    <div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #374151;">Preferências do Sistema</h4>
                        
                        <div class="form-group">
                            <label class="form-label">Idioma</label>
                            <select class="select" style="width: 100%;">
                                <option value="pt-BR" selected>Português (Brasil)</option>
                                <option value="en-US">English (US)</option>
                                <option value="es-ES">Español</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Fuso Horário</label>
                            <select class="select" style="width: 100%;">
                                <option value="America/Sao_Paulo" selected>America/São_Paulo (UTC-3)</option>
                                <option value="America/New_York">America/New_York (UTC-5)</option>
                                <option value="Europe/London">Europe/London (UTC+0)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Formato de Data</label>
                            <select class="select" style="width: 100%;">
                                <option value="dd/mm/yyyy" selected>DD/MM/AAAA</option>
                                <option value="mm/dd/yyyy">MM/DD/AAAA</option>
                                <option value="yyyy-mm-dd">AAAA-MM-DD</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Moeda</label>
                            <select class="select" style="width: 100%;">
                                <option value="BRL" selected>Real Brasileiro (R$)</option>
                                <option value="USD">Dólar Americano ($)</option>
                                <option value="EUR">Euro (€)</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #374151;">Notificações</h4>
                        
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox" checked>
                                <span style="font-size: 14px;">Notificar quando previsões forem concluídas</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox" checked>
                                <span style="font-size: 14px;">Alertas de desvio de acurácia</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox">
                                <span style="font-size: 14px;">Relatórios semanais por email</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox" checked>
                                <span style="font-size: 14px;">Notificações de falha em automações</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="chart-card">
                <div class="chart-header">
                    <div class="chart-title">Configurações de Modelo</div>
                </div>
                <div style="display: grid; gap: 20px;">
                    <div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #374151;">Parâmetros Padrão</h4>
                        
                        <div class="form-group">
                            <label class="form-label">Período Histórico Padrão</label>
                            <select class="select" style="width: 100%;">
                                <option value="24">24 meses</option>
                                <option value="36" selected>36 meses</option>
                                <option value="48">48 meses</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Horizonte de Previsão Padrão</label>
                            <select class="select" style="width: 100%;">
                                <option value="12">12 meses</option>
                                <option value="18" selected>18 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Modelo Preferido</label>
                            <select class="select" style="width: 100%;">
                                <option value="auto" selected>Seleção Automática</option>
                                <option value="prophet">Prophet</option>
                                <option value="arima">ARIMA</option>
                                <option value="lstm">LSTM</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Threshold de Alerta (%)</label>
                            <input type="number" class="form-input" value="15" min="5" max="50">
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #374151;">Performance</h4>
                        
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox" checked>
                                <span style="font-size: 14px;">Usar processamento paralelo</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox" checked>
                                <span style="font-size: 14px;">Cache de resultados intermediários</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 12px;">
                                <input type="checkbox">
                                <span style="font-size: 14px;">Otimização GPU (quando disponível)</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-grid slide-up">
            <div class="info-card">
                <div class="info-header">
                    <div class="info-title">Conexões</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                            <h4 style="font-size: 14px; font-weight: 600;">SAP ECC</h4>
                            <span class="status-icon status-success"></span>
                        </div>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">Servidor: 192.168.1.100</p>
                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                            <i class="fas fa-cog"></i>
                            Configurar
                        </button>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                            <h4 style="font-size: 14px; font-weight: 600;">OpenWeather API</h4>
                            <span class="status-icon status-success"></span>
                        </div>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">Limite: 1000 req/dia</p>
                        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                            <i class="fas fa-key"></i>
                            API Key
                        </button>
                    </div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-header">
                    <div class="info-title">Backup & Segurança</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-download"></i>
                        Exportar Configurações
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-upload"></i>
                        Importar Configurações
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-shield-alt"></i>
                        Logs de Segurança
                    </button>
                    <button class="btn btn-secondary" style="justify-content: flex-start; color: #374151;">
                        <i class="fas fa-trash-restore"></i>
                        Restaurar Padrões
                    </button>
                </div>
            </div>

            <div class="info-card">
                <div class="info-header">
                    <div class="info-title">Sistema</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #374151;">Informações</h4>
                        <div style="font-size: 12px; color: #6b7280; line-height: 1.6;">
                            <p>Versão: 2.1.0</p>
                            <p>Última Atualização: 01/09/2025</p>
                            <p>Ambiente: Produção</p>
                            <p>Uptime: 99.7%</p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #374151;">Recursos</h4>
                        <div style="font-size: 12px; color: #6b7280; line-height: 1.6;">
                            <p>CPU: 45% utilizada</p>
                            <p>Memória: 2.1GB / 8GB</p>
                            <p>Armazenamento: 125GB / 500GB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.querySelector(".main-content").innerHTML = content;
};

// Adicionar funções auxiliares
ForecastApp.prototype.gerarRelatorio = function () {
  this.showNotification(
    "Gerando relatório... Você será notificado quando estiver pronto.",
    "info"
  );

  // Simular geração de relatório
  setTimeout(() => {
    this.showNotification(
      "Relatório gerado com sucesso! Disponível para download.",
      "success"
    );
  }, 3000);
};

ForecastApp.prototype.selectTemplate = function (templateId) {
  this.showNotification(`Template "${templateId}" selecionado`, "success");
};

ForecastApp.prototype.salvarConfiguracoes = function () {
  this.showNotification("Configurações salvas com sucesso!", "success");
};

// Adicionar as outras páginas que faltam
ForecastApp.prototype.loadEquipe = function () {
  const content = `
        <div class="header">
            <div class="header-left">
                <h2>Equipe</h2>
                <p>Gerencie usuários e permissões</p>
            </div>
            <div class="header-actions">
                <button class="btn btn-primary" onclick="app.adicionarUsuario()">
                    <i class="fas fa-user-plus"></i>
                    Adicionar Usuário
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
                    <span class="kpi-title">Usuários Ativos</span>
                    <div class="kpi-icon icon-success">
                        <i class="fas fa-users"></i>
                    </div>
                </div>
                <div class="kpi-value">24</div>
                <div class="kpi-change positive">
                    <i class="fas fa-user-check"></i>
                    Online: 18
                </div>
            </div>

            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Perfis de Acesso</span>
                    <div class="kpi-icon icon-teal">
                        <i class="fas fa-key"></i>
                    </div>
                </div>
                <div class="kpi-value">8</div>
                <div class="kpi-change neutral">
                    <i class="fas fa-lock"></i>
                    Configurados
                </div>
            </div>

            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Última Atividade</span>
                    <div class="kpi-icon icon-warning">
                        <i class="fas fa-clock"></i>
                    </div>
                </div>
                <div class="kpi-value">3min</div>
                <div class="kpi-change positive">
                    <i class="fas fa-user-check"></i>
                    João Silva
                </div>
            </div>
        </div>

        <div class="bottom-grid slide-up">
            <div class="info-card" style="grid-column: span 2;">
                <div class="info-header">
                    <div class="info-title">Usuários do Sistema</div>
                    <a href="#" class="view-all">Gerenciar Permissões</a>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Usuário</th>
                                <th>Email</th>
                                <th>Perfil</th>
                                <th>Último Acesso</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <div style="width: 36px; height: 36px; background: linear-gradient(45deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px;">JS</div>
                                        <div>
                                            <strong>João Silva</strong><br>
                                            <small style="color: #6b7280;">Analista de Dados</small>
                                        </div>
                                    </div>
                                </td>
                                <td>joao.silva@tigre.com</td>
                                <td><span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;">Admin</span></td>
                                <td>Há 3 min</td>
                                <td><span class="status-icon status-success"></span> Online</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <div style="width: 36px; height: 36px; background: linear-gradient(45deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px;">MF</div>
                                        <div>
                                            <strong>Maria Fernandes</strong><br>
                                            <small style="color: #6b7280;">Gerente de Planejamento</small>
                                        </div>
                                    </div>
                                </td>
                                <td>maria.fernandes@tigre.com</td>
                                <td><span style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;">Manager</span></td>
                                <td>Há 1 hora</td>
                                <td><span class="status-icon status-success"></span> Online</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <div style="width: 36px; height: 36px; background: linear-gradient(45deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px;">PS</div>
                                        <div>
                                            <strong>Paulo Santos</strong><br>
                                            <small style="color: #6b7280;">Analista Jr.</small>
                                        </div>
                                    </div>
                                </td>
                                <td>paulo.santos@tigre.com</td>
                                <td><span style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;">Viewer</span></td>
                                <td>Ontem</td>
                                <td><span class="status-icon status-warning"></span> Offline</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="info-card">
                <div class="info-header">
                    <div class="info-title">Perfis de Acesso</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #1e40af;">Administrador</h4>
                            <span style="font-size: 12px; color: #6b7280;">5 usuários</span>
                        </div>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Acesso total ao sistema</p>
                        <div style="font-size: 11px; color: #059669;">✓ Todas as funcionalidades</div>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #059669;">Gerente</h4>
                            <span style="font-size: 12px; color: #6b7280;">8 usuários</span>
                        </div>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Gerenciar previsões e relatórios</p>
                        <div style="font-size: 11px; color: #059669;">✓ Criar previsões ✓ Relatórios</div>
                    </div>
                    
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #d97706;">Visualizador</h4>
                            <span style="font-size: 12px; color: #6b7280;">11 usuários</span>
                        </div>
                        <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Apenas visualização</p>
                        <div style="font-size: 11px; color: #059669;">✓ Dashboard ✓ Relatórios</div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.querySelector(".main-content").innerHTML = content;
};

ForecastApp.prototype.adicionarUsuario = function () {
  this.showNotification("Modal de adição de usuário seria aberto aqui", "info");
};

// Estender o main.js para incluir as páginas restantes no método loadPage
ForecastApp.prototype.originalLoadPage = ForecastApp.prototype.loadPage;
ForecastApp.prototype.loadPage = function (page) {
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
      case "equipe":
        this.loadEquipe();
        break;
      default:
        this.loadDashboard();
    }

    // Remove loading state
    mainContent.style.opacity = "1";
    this.initializePageAnimations();
  }, 300);
};
