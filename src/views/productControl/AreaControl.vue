<template>
  <div>
    <area-select v-model="address1" :level="2" :data="pcaa"></area-select>
    <el-button type="primary" round class="ad" @click="() => append(address1)"
      >添加区域</el-button
    >
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)"
              >
                Delete
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Area',
  data() {
    const data = [
      {
        id: 1,
        label: '四川省',
        children: [
          {
            id: 4,
            label: '成都市',
            children: [
              {
                id: 9,
                label: '双流区',
              },
              {
                id: 10,
                label: '锦江区',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '河北省',
        children: [
          {
            id: 5,
            label: '石家庄市',
            children: [],
          },
          {
            id: 6,
            label: '衡水市',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: '新疆省',
        children: [
          {
            id: 7,
            label: '乌鲁木齐市',
            children: [],
          },
          {
            id: 8,
            label: '吐鲁番市',
            children: [],
          },
        ],
      },
    ]
    
    return {
      address1: [],
      data: JSON.parse(JSON.stringify(data)),
    }
  },
  methods: {
    append() {
      var selected = []
      selected[0] = this.pcaa[86][this.address1[0]] //res.data.addrprovinceid省对应的id
      selected[1] = this.pcaa[this.address1[0]][this.address1[1]] //res.data.addrcityid省对应的id
      selected[2] = this.pcaa[this.address1[1]][this.address1[2]] //res.data.addrcountyid省对应的id
      console.log(selected[0])
      let i
      for (i = 0; i < this.data.length; i++) {
        console.log(this.data[i].label)

        if (this.data[i].label === selected[0]) {
          let j
          for (j = 0; j < this.data[i].children.length; j++) {
            if (this.data[i].children[j].label === selected[1]) {
              const newqu = {
                id: this.address1[2],
                label: selected[2],
                children: [],
              }
              this.data[i].children[j].children.push(newqu)
              return
            }
          }
          if (j === this.data[i].children.length) {
            const newshi = {
              id: this.address1[1],
              label: selected[1],
              children: [],
            }
            const newqu = {
              id: this.address1[2],
              label: selected[2],
              children: [],
            }
            newshi.children.push(newqu)
            this.data[i].children.push(newshi)
            return
          }
        }
      }
      if (i === this.data.length) {
        const newsheng = {
          id: this.address1[0],
          label: selected[0],
          children: [],
        }
        const newshi = {
          id: this.address1[1],
          label: selected[1],
          children: [],
        }
        const newqu = {
          id: this.address1[2],
          label: selected[2],
          children: [],
        }
        newshi.children.push(newqu)
        newsheng.children.push(newshi)
        this.data.push(newsheng)
      }
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent(h, { node, data }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      )
    },
  },
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.ad {
  margin-top: 20px;
  margin-right: -1100px;
}
</style>
