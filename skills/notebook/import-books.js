#!/usr/bin/env node

import { loadTypes, createObject } from './lib/store.js';
import fs from 'fs';
import path from 'path';

// 初始化
const WORKSPACE_DIR = '/opt/.openclaw/workspace';
const BOOKS_DIR = path.join(WORKSPACE_DIR, 'books');

// 定义每个文档的信息
const docs = [
  {
    file: '01_模块化模型服务架构.md',
    title: '模块化模型服务架构',
    category: '架构设计',
    status: 'review',
    tags: 'architecture,model,provider,xsai,registry',
    summary: '为Athena设计的LLM请求模块，将模型提供商注册为插件，实现模块化配置。ProviderRegistry作为凭据分发中心，不包装请求，只返回模型凭据。包含负载均衡、故障转移、参数传递等功能。'
  },
  {
    file: '02_异步任务系统.md',
    title: '异步任务系统',
    category: '系统设计',
    status: 'review',
    tags: 'async,task,job,worker',
    summary: '异步任务系统的设计方案，包含任务队列、Worker池、任务重试机制等。用于处理耗时操作，避免阻塞主线程。'
  },
  {
    file: '03_智能体记忆系统演进.md',
    title: '智能体记忆系统演进',
    category: '记忆系统',
    status: 'review',
    tags: 'memory,agent,evolution,L1,L2,L3',
    summary: '智能体记忆系统的演进历程，包含L1（短期）、L2（语义）、L3（归档）三层记忆架构。讨论了记忆检索、存储、遗忘等机制。'
  },
  {
    file: '04_系统架构重审.md',
    title: '系统架构重审',
    category: '架构设计',
    status: 'review',
    tags: 'architecture,refactor,design',
    summary: '对YesImBot系统架构的重新审视，讨论模块解耦、接口设计、依赖关系等问题。提出改进建议和重构方案。'
  },
  {
    file: '05_工具调用范式与心跳循环.md',
    title: '工具调用范式与心跳循环',
    category: '工具系统',
    status: 'review',
    tags: 'tool,heartbeat,paradigm,cycle',
    summary: '工具调用的设计范式和心跳循环机制。包含工具注册、调用链、错误处理、定时任务等内容。'
  },
  {
    file: '06_拟人化唤醒与自主机制.md',
    title: '拟人化唤醒与自主机制',
    category: '拟人化',
    status: 'review',
    tags: 'human,wakeup,autonomy,trigger',
    summary: '拟人化唤醒机制和自主行为设计。让AI具有"睡觉"、"唤醒"、"闪现"等拟人化行为，增强沉浸感和真实感。'
  },
  {
    file: '07_记忆检索方案.md',
    title: '记忆检索方案',
    category: '记忆系统',
    status: 'review',
    tags: 'memory,retrieval,search,vector,embed',
    summary: '记忆检索的技术方案，包含向量搜索、语义匹配、关键词检索等多种方式。讨论了检索精度、性能优化等问题。'
  }
];

async function importDocs() {
  console.log('📚 开始导入books目录内容...\n');

  for (const doc of docs) {
    try {
      const filePath = path.join(BOOKS_DIR, doc.file);

      // 读取文件内容
      const content = fs.readFileSync(filePath, 'utf-8');

      // 创建notebook对象
      const obj = createObject('doc', {
        title: doc.title,
        category: doc.category,
        status: doc.status,
        summary: doc.summary,
        content: `完整内容请查看: ${filePath}`,
        tags: doc.tags
      });

      console.log(`✅ 已导入: ${doc.title}`);
      console.log(`   ID: ${obj.id}`);
      console.log(`   分类: ${doc.category}`);
      console.log(`   标签: ${doc.tags}\n`);

    } catch (error) {
      console.error(`❌ 导入失败: ${doc.title}`);
      console.error(`   错误: ${error.message}\n`);
    }
  }

  console.log('🎉 导入完成！');
}

importDocs().catch(console.error);
